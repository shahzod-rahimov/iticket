import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAdminDto {
  @ApiProperty({ example: 'Name', description: 'Admin name' })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'admin@mail.com', description: 'Admin email' })
  @IsOptional()
  @IsString()
  readonly login: string;

  @ApiProperty({ example: 'true/false', description: 'Is active' })
  @IsOptional()
  @IsBoolean()
  readonly is_active: boolean;

  @ApiProperty({ example: 'true/false', description: 'Is creator' })
  @IsOptional()
  @IsBoolean()
  readonly is_creator: boolean;
}
