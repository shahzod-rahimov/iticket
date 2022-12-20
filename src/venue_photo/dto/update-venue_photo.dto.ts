import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateVenuePhotoDto {
  @ApiProperty({ example: '1', description: 'Venue id' })
  @IsOptional()
  @IsNumber()
  readonly venue_id: number;
}
