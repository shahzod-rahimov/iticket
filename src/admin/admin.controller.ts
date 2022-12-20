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

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('signup')
  signup(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.signup(createAdminDto, res);
  }

  @Post('signin')
  signin(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.signin(signInDto, res);
  }

  @Post('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.adminService.logout(req, res);
  }

  @UseGuards(JwtAdminGuard)
  @Get()
  getAllAdmins() {
    return this.adminService.getAllAdmins();
  }
}
