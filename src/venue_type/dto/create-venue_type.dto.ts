import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVenueTypeDto {
  @ApiProperty({ example: 'qwerty', description: 'Venue type name' })
  @IsString()
  readonly name: string;
}
