import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({ example: 'jondoe@mail.uz', description: 'Email' })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'yourStrongPassword', description: 'Password' })
  @IsString()
  @MinLength(4)
  readonly password: string;
}
