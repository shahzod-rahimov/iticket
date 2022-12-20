import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { Response, Request } from 'express';
import { JwtAdminGuard } from 'src/guards/admin.guard';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JwtCostumerGuard } from 'src/guards/costumer.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post('signup')
  signup(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.customerService.signup(createCustomerDto, res);
  }

  @Post('signin')
  signin(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.customerService.signin(signInDto, res);
  }

  @Post('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.customerService.logout(req, res);
  }

  @UseGuards(JwtCostumerGuard)
  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }
}
