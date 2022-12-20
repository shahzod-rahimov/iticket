import { ApiProperty } from '@nestjs/swagger';
import {
  IsPhoneNumber,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateCustomerDto {
  @ApiProperty({ example: 'Jon', description: 'First name' })
  @IsOptional()
  @IsString()
  readonly first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  @IsOptional()
  @IsString()
  readonly last_name: string;

  @ApiProperty({ example: '+998991234567', description: 'Phone number' })
  @IsOptional()
  @IsPhoneNumber('UZ')
  readonly phone: string;

  @ApiProperty({ example: 'jondoe@mail.uz', description: 'Email' })
  @IsOptional()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '01-01-2001', description: 'Birthdate' })
  @IsOptional()
  @IsDate()
  readonly birth_date: Date;

  @ApiProperty({ example: "{ 1: 'male', 2: 'female' }", description: 'Gender' })
  @IsOptional()
  @IsNumber()
  readonly gender: number;

  @ApiProperty({ example: '1', description: 'Language id' })
  @IsOptional()
  @IsNumber()
  readonly lang_id: number;
}
