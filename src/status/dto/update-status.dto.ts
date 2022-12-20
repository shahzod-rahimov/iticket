import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStatusDto {
  @ApiProperty({ example: 'qwerty', description: 'Status name' })
  @IsOptional()
  @IsString()
  readonly status_name: string;
}
