// import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignInDto {
  // @ApiProperty({
  //   example: 'user1@mail.uz',
  //   description: 'Foydalanuvchi elektron pochtasi',
  // })
  @IsString()
  @IsEmail()
  readonly email: string;

  // @ApiProperty({
  //   example: '1234567',
  //   description: 'Foydalanuvchi paroli',
  // })
  @IsString()
  @MinLength(4)
  readonly password: string;
}
