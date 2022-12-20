import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateVenuePhotoDto {
  @ApiProperty({ example: '1', description: 'Venue id' })
  @IsNumber()
  readonly venue_id: number;
}
