import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCustomerCardDto {
  @ApiProperty({ example: '1', description: 'Customer id' })
  @IsNumber()
  readonly customer_id: number;

  @ApiProperty({ example: 'qwerty', description: 'Name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '+998991234567', description: 'Phone number' })
  @IsPhoneNumber('UZ')
  readonly phone: string;

  @ApiProperty({ example: '2', description: 'Number' })
  @IsString()
  readonly number: string;

  @ApiProperty({ example: '2022', description: 'Year' })
  @IsString()
  readonly year: string;

  @ApiProperty({ example: 'May', description: 'Months' })
  @IsString()
  readonly month: string;

  @ApiProperty({ example: 'true/false', description: 'Is active' })
  @IsBoolean()
  readonly is_active: boolean;

  @ApiProperty({ example: 'true/false', description: 'Is main' })
  @IsBoolean()
  readonly is_main: boolean;
}
