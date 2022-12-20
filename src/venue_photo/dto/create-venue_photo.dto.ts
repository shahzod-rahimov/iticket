import { IsNumber } from 'class-validator';

export class CreateVenuePhotoDto {
  @IsNumber()
  readonly venue_id: number;
}
