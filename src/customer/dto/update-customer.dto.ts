import {
  IsPhoneNumber,
  IsString,
  IsEmail,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  readonly first_name;
  @IsOptional()
  @IsString()
  readonly last_name;
  @IsOptional()
  @IsPhoneNumber('UZ')
  readonly phone;
  @IsOptional()
  @IsEmail()
  readonly email;
  @IsOptional()
  @IsDate()
  readonly birth_date;
  @IsOptional()
  @IsNumber()
  readonly gender;
  @IsOptional()
  @IsNumber()
  readonly lang_id;
}
