import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLanguagesDto {
  @ApiProperty({ example: 'uzbek', description: 'Language' })
  @IsString()
  @IsOptional()
  readonly language: string;
}
