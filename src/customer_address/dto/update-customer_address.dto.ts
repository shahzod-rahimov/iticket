import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCustomerAddressDto {
  @IsOptional()
  @IsNumber()
  readonly customer_id;

  @IsOptional()
  @IsString()
  readonly name;

  @IsOptional()
  @IsNumber()
  readonly country_id;

  @IsOptional()
  @IsNumber()
  readonly region_id;

  @IsOptional()
  @IsNumber()
  readonly district_id;

  @IsOptional()
  @IsString()
  readonly street;

  @IsOptional()
  @IsString()
  readonly house;

  @IsOptional()
  @IsNumber()
  readonly flat;

  @IsOptional()
  @IsString()
  readonly location;

  @IsOptional()
  @IsString()
  readonly post_index;

  @IsOptional()
  @IsString()
  readonly info;
}
