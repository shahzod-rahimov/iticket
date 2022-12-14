import {
  IsPhoneNumber,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  readonly first_name;
  @IsString()
  readonly last_name;
  @IsPhoneNumber('UZ')
  readonly phone;
  @IsString()
  readonly hashed_password;
  @IsEmail()
  readonly email;
  @IsDate()
  readonly birth_date;
  @IsNumber()
  readonly gender;
  @IsNumber()
  readonly lang_id;
  @IsString()
  readonly hashed_refresh_token;
}
