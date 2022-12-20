import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAdminDto {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsString()
  readonly login: string;
  @IsOptional()
  @IsBoolean()
  readonly is_active: boolean;
  @IsOptional()
  @IsBoolean()
  readonly is_creator: boolean;
}
