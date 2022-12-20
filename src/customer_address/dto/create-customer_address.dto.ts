import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerAddressDto {
  @IsNumber()
  readonly customer_id: number;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly country_id: number;

  @IsNumber()
  readonly region_id: number;

  @IsNumber()
  readonly district_id: number;

  @IsString()
  readonly street: string;

  @IsString()
  readonly house: string;

  @IsNumber()
  readonly flat: number;

  @IsString()
  readonly location: string;

  @IsString()
  readonly post_index: string;

  @IsString()
  readonly info: string;
}
