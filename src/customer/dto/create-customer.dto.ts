import {
  IsPhoneNumber,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  readonly first_name: string;
  @IsString()
  readonly last_name: string;
  @IsPhoneNumber('UZ')
  readonly phone: string;
  @IsString()
  readonly hashed_password: string;
  @IsEmail()
  readonly email: string;
  @IsDate()
  readonly birth_date: Date;
  @IsNumber()
  readonly gender: number;
  @IsNumber()
  readonly lang_id: number;
  @IsString()
  readonly hashed_refresh_token: string;
}
