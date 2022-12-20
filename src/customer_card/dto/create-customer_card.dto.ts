import { IsBoolean, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCustomerCardDto {
  @IsNumber()
  readonly customer_id: number;

  @IsString()
  readonly name: string;

  @IsPhoneNumber('UZ')
  readonly phone: string;

  @IsString()
  readonly number: string;

  @IsString()
  readonly year: string;

  @IsString()
  readonly month: string;

  @IsBoolean()
  readonly is_active: boolean;

  @IsBoolean()
  readonly is_main: boolean;
}
