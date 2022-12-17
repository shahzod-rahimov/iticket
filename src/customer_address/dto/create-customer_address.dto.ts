import { IsNumber, IsString } from 'class-validator';

export class CreateCustomerAddressDto {
  @IsNumber()
  readonly customer_id;

  @IsString()
  readonly name;

  @IsNumber()
  readonly country_id;

  @IsNumber()
  readonly region_id;

  @IsNumber()
  readonly district_id;

  @IsString()
  readonly street;

  @IsString()
  readonly house;

  @IsNumber()
  readonly flat;

  @IsString()
  readonly location;

  @IsString()
  readonly post_index;

  @IsString()
  readonly info;
}
