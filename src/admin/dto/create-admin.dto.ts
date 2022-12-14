import { IsBoolean, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  readonly name;
  @IsString()
  readonly login;
  @IsString()
  readonly hashed_password;
  @IsBoolean()
  readonly is_active;
  @IsBoolean()
  readonly is_creator;
}
