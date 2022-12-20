import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLanguagesDto {
  @ApiProperty({ example: 'uzbek', description: 'Language' })
  @IsString()
  readonly language: string;
}
