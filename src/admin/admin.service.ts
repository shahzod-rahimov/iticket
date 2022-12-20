import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import * as bcrypt from 'bcryptjs';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminModel: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}

  async getAllAdmins() {
    return this.adminModel.findAll();
  }

  async signup(createAdminDto: CreateAdminDto, res: Response) {
    const condidate = await this.adminModel.findOne({
      where: { login: createAdminDto.login },
    });
    if (condidate) {
      throw new HttpException(
        'Bunday foydalanuvchi mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 7);
    const admin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password: hashedPassword,
    });

    return this.getCookies(admin, res);
  }

  async signin(signInDto: SignInDto, res: Response) {
    const admin = await this.validateUser(signInDto);
    if (!admin)
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);

    return this.getCookies(admin, res);
  }

  private async validateUser(signInDto: SignInDto) {
    const user = await this.adminModel.findOne({
      where: { login: signInDto.email },
    });
    if (!user) throw new UnauthorizedException("Email yoki parol nato'g'ri");

    const validPassword = await bcrypt.compare(
      signInDto.password,
      user.hashed_password,
    );
    if (user && validPassword) {
      return user;
    }

    throw new UnauthorizedException("Email yoki parol nato'g'ri");
  }

  async logout(req, res) {
    const token = req.cookies;
    const admin = await this.jwtService.verify(token['refresh_token'], {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    this.adminModel.update(
      { hashed_refresh_token: null },
      { where: { id: admin.id } },
    );
    res.clearCookie('refresh_token');
    return 'Logouted';
  }

  async updateRefreshTokenHash(
    adminId: number,
    refreshToken: string,
  ): Promise<void> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);

    await this.adminModel.update(
      { hashed_refresh_token: hashedRefreshToken },
      {
        where: { id: adminId },
      },
    );
  }

  private async generateTokens(admin: Admin) {
    const payload = {
      id: admin.id,
      login: admin.login,
      is_creator: admin.is_creator,
      is_active: admin.is_active,
    };

    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      access_token,
      refresh_token,
    };
  }

  async getCookies(admin: Admin, res: Response) {
    const tokens = await this.generateTokens(admin);
    await this.updateRefreshTokenHash(admin.id, tokens.refresh_token);

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return tokens;
  }
}
