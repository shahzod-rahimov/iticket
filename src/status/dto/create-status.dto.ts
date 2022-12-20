import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({ example: 'qwerty', description: 'Status name' })
  @IsString()
  readonly status_name: string;
}
