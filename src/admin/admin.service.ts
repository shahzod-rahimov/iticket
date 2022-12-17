import {
  Body,
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

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminModel: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}

  async getAllAdmins() {
    return this.adminModel.findAll();
  }

  async signup(@Body() createAdminDto: CreateAdminDto) {
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

    return this.generateToken(admin);
  }

  async signin(signInDto: SignInDto) {
    const admin = await this.validateUser(signInDto);
    if (!admin)
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);

    return this.generateToken(admin);
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

  private async generateToken(admin: Admin) {
    const payload = { login: admin.login, id: admin.id };
    return { token: this.jwtService.sign(payload) };
  }
}
