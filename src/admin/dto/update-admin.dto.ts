import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAdminDto {
  @IsOptional()
  @IsString()
  readonly name;
  @IsOptional()
  @IsString()
  readonly login;
  @IsOptional()
  @IsBoolean()
  readonly is_active;
  @IsOptional()
  @IsBoolean()
  readonly is_creator;
}
