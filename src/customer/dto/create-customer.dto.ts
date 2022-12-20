import { ApiProperty } from '@nestjs/swagger';
import {
  IsPhoneNumber,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Jon', description: 'First name' })
  @IsString()
  readonly first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  @IsString()
  readonly last_name: string;

  @ApiProperty({ example: '+998991234567', description: 'Phone number' })
  @IsPhoneNumber('UZ')
  readonly phone: string;

  @ApiProperty({ example: 'yourStrongPassword', description: 'Password' })
  @IsString()
  readonly hashed_password: string;

  @ApiProperty({ example: 'jondoe@mail.uz', description: 'Email' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '01-01-2001', description: 'Birthdate' })
  @IsDateString()
  readonly birth_date: Date;

  @ApiProperty({ example: "{ 1: 'male', 2: 'female' }", description: 'Gender' })
  @IsNumber()
  readonly gender: number;

  @ApiProperty({ example: '1', description: 'Language id' })
  @IsNumber()
  readonly lang_id: number;
}
