import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSeatTypeDto {
  @ApiProperty({ example: 'qwerty', description: 'Seat type name' })
  @IsString()
  readonly name: string;
}
