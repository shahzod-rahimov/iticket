import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerAddressDto {
  @ApiProperty({ example: '1', description: 'Customer id' })
  @IsNumber()
  readonly customer_id: number;

  @ApiProperty({ example: 'qwerty', description: 'Name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '2', description: 'Country id' })
  @IsNumber()
  readonly country_id: number;

  @ApiProperty({ example: '3', description: 'Region id' })
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({ example: '4', description: 'District id' })
  @IsNumber()
  readonly district_id: number;

  @ApiProperty({ example: 'Eshonguzar', description: 'Street name' })
  @IsString()
  readonly street: string;

  @ApiProperty({ example: '12', description: 'House number' })
  @IsString()
  readonly house: string;

  @ApiProperty({ example: '13', description: 'Flat number' })
  @IsNumber()
  readonly flat: number;

  @ApiProperty({ example: 'http://google-maps.com', description: 'Location' })
  @IsString()
  readonly location: string;

  @ApiProperty({ example: '1234567', description: 'Post index number' })
  @IsString()
  readonly post_index: string;

  @ApiProperty({ example: 'qwertyuioifdfgh', description: 'Info' })
  @IsString()
  readonly info: string;
}
