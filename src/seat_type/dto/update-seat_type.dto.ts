import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSeatTypeDto {
  @ApiProperty({ example: 'qwerty', description: 'Seat type name' })
  @IsOptional()
  @IsString()
  readonly name: string;
}
