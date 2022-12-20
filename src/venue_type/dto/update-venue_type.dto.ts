import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateVenueTypeDto {
  @ApiProperty({ example: 'qwerty', description: 'Venue type name' })
  @IsOptional()
  @IsString()
  readonly name: string;
}
