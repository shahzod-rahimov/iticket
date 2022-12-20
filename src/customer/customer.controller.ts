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
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JwtCostumerGuard } from 'src/guards/costumer.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Customer } from './customer.model';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: 'Customer signup' })
  @ApiResponse({ status: 201, type: Customer })
  @Post('signup')
  signup(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.customerService.signup(createCustomerDto, res);
  }

  @ApiOperation({ summary: 'Customer signin' })
  @ApiResponse({ status: 201, type: Customer })
  @Post('signin')
  signin(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.customerService.signin(signInDto, res);
  }

  @ApiOperation({ summary: 'Customer logout' })
  @ApiResponse({ status: 201, type: Customer })
  @Post('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.customerService.logout(req, res);
  }

  @ApiOperation({ summary: 'Get all customer' })
  @ApiResponse({ status: 201, type: [Customer] })
  @UseGuards(JwtCostumerGuard)
  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }
}
