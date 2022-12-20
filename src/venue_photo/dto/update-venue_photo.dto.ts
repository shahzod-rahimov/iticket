import { IsNumber, IsOptional } from 'class-validator';

export class UpdateVenuePhotoDto {
  @IsOptional()
  @IsNumber()
  readonly venue_id: number;
}
