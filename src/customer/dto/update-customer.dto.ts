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
  readonly first_name: string;
  @IsOptional()
  @IsString()
  readonly last_name: string;
  @IsOptional()
  @IsPhoneNumber('UZ')
  readonly phone: string;
  @IsOptional()
  @IsEmail()
  readonly email: string;
  @IsOptional()
  @IsDate()
  readonly birth_date: Date;
  @IsOptional()
  @IsNumber()
  readonly gender: number;
  @IsOptional()
  @IsNumber()
  readonly lang_id: number;
}
