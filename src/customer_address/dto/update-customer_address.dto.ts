import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCustomerAddressDto {
  @ApiProperty({ example: '1', description: 'Customer id' })
  @IsOptional()
  @IsNumber()
  readonly customer_id: number;

  @ApiProperty({ example: 'qwerty', description: 'Name' })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '2', description: 'Country id' })
  @IsOptional()
  @IsNumber()
  readonly country_id: number;

  @ApiProperty({ example: '3', description: 'Region id' })
  @IsOptional()
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({ example: '4', description: 'District id' })
  @IsOptional()
  @IsNumber()
  readonly district_id: number;

  @ApiProperty({ example: 'Eshonguzar', description: 'Street name' })
  @IsOptional()
  @IsString()
  readonly street: string;

  @ApiProperty({ example: '12', description: 'House number' })
  @IsOptional()
  @IsString()
  readonly house: string;

  @ApiProperty({ example: '13', description: 'Flat number' })
  @IsOptional()
  @IsNumber()
  readonly flat: number;

  @ApiProperty({ example: 'http://google-maps.com', description: 'Location' })
  @IsOptional()
  @IsString()
  readonly location: string;

  @ApiProperty({ example: '1234567', description: 'Post index number' })
  @IsOptional()
  @IsString()
  readonly post_index: string;

  @ApiProperty({ example: 'qwertyuioifdfgh', description: 'Info' })
  @IsOptional()
  @IsString()
  readonly info: string;
}
