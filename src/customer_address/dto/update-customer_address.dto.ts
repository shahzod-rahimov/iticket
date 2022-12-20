import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCustomerAddressDto {
  @IsOptional()
  @IsNumber()
  readonly customer_id: number;

  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly country_id: number;

  @IsOptional()
  @IsNumber()
  readonly region_id: number;

  @IsOptional()
  @IsNumber()
  readonly district_id: number;

  @IsOptional()
  @IsString()
  readonly street: string;

  @IsOptional()
  @IsString()
  readonly house: string;

  @IsOptional()
  @IsNumber()
  readonly flat: number;

  @IsOptional()
  @IsString()
  readonly location: string;

  @IsOptional()
  @IsString()
  readonly post_index: string;

  @IsOptional()
  @IsString()
  readonly info: string;
}
