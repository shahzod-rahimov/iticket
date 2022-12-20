import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { Customer } from './customer.model';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerModel: typeof Customer,
    private readonly jwtService: JwtService,
  ) {}

  async getAllCustomers() {
    return this.customerModel.findAll({ include: { all: true } });
  }

  getByID(id: number) {
    return this.customerModel.findOne({ where: { id } });
  }

  async signup(createCustomerDto: CreateCustomerDto, res: Response) {
    const condidate = await this.customerModel.findOne({
      where: { email: createCustomerDto.email },
    });
    if (condidate) {
      throw new HttpException(
        'Bunday foydalanuvchi mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await bcrypt.hash(
      createCustomerDto.hashed_password,
      7,
    );
    const customer = await this.customerModel.create({
      ...createCustomerDto,
      hashed_password: hashedPassword,
    });

    return this.getCookies(customer, res);
  }

  async signin(signInDto: SignInDto, res: Response) {
    const customer = await this.validateUser(signInDto);
    if (!customer)
      throw new HttpException('Foydalanuvchi topilmadi', HttpStatus.NOT_FOUND);

    return this.getCookies(customer, res);
  }

  async logout(req, res) {
    const token = req.cookies;
    const customer = await this.jwtService.verify(token['refresh_token'], {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    this.customerModel.update(
      { hashed_refresh_token: null },
      { where: { id: customer.id } },
    );
    res.clearCookie('refresh_token');
    return 'Logouted';
  }

  private async validateUser(signInDto: SignInDto) {
    const user = await this.customerModel.findOne({
      where: { email: signInDto.email },
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

  async updateRefreshTokenHash(
    customerId: number,
    refreshToken: string,
  ): Promise<void> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);

    await this.customerModel.update(
      { hashed_refresh_token: hashedRefreshToken },
      {
        where: { id: customerId },
      },
    );
  }

  private async generateTokens(customer: Customer) {
    const payload = {
      sub: customer.id,
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

  async getCookies(customer: Customer, res: Response) {
    const tokens = await this.generateTokens(customer);
    await this.updateRefreshTokenHash(customer.id, tokens.refresh_token);

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return tokens;
  }
}
