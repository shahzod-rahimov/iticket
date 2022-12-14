import { IsBoolean, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateCustomerCardDto {
  @IsNumber()
  readonly customer_id;

  @IsString()
  readonly name;

  @IsPhoneNumber('UZ')
  readonly phone;

  @IsString()
  readonly number;

  @IsString()
  readonly year;

  @IsString()
  readonly month;

  @IsBoolean()
  readonly is_active;

  @IsBoolean()
  readonly is_main;
}
