import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { SignInDto } from './dto/signin.dto';
import { Response, Request } from 'express';
import { JwtAdminGuard } from 'src/guards/admin.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Admin } from './admin.model';

@ApiTags('Admins')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Admin signup' })
  @ApiResponse({ status: 201, type: [Admin] })
  @Post('signup')
  signup(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.signup(createAdminDto, res);
  }

  @ApiOperation({ summary: 'Admin signin' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('signin')
  signin(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.signin(signInDto, res);
  }

  @ApiOperation({ summary: 'Admin logout' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.adminService.logout(req, res);
  }

  @ApiOperation({ summary: 'Show all admins' })
  @ApiResponse({ status: 201, type: [Admin] })
  @UseGuards(JwtAdminGuard)
  @Get()
  getAllAdmins() {
    return this.adminService.getAllAdmins();
  }
}
