import { IsBoolean, IsString, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: 'Name', description: 'Admin name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'admin@mail.com', description: 'Admin email' })
  @IsEmail()
  readonly login: string;

  @ApiProperty({ example: 'qwerty123', description: 'Admin password' })
  @IsString()
  @MinLength(4)
  readonly hashed_password: string;

  @ApiProperty({ example: 'true/false', description: 'Is active' })
  @IsBoolean()
  readonly is_active: boolean;

  @ApiProperty({ example: 'true/false', description: 'Is creator' })
  @IsBoolean()
  readonly is_creator: boolean;
}
