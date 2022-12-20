import { IsBoolean, IsString, IsEmail } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  readonly name: string;
  @IsEmail()
  readonly login: string;
  @IsString()
  readonly hashed_password: string;
  @IsBoolean()
  readonly is_active: boolean;
  @IsBoolean()
  readonly is_creator: boolean;
}
