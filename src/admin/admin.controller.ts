import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('signup')
  signup(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.signup(createAdminDto);
  }

  @Post('signin')
  signin(@Body() signInDto: SignInDto) {
    return this.adminService.signin(signInDto);
  }

  @Get()
  getAllAdmins(){
    return this.adminService.getAllAdmins()
  }

}
