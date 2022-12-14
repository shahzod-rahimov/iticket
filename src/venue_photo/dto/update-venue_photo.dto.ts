import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVenuePhotoDto {
  @IsOptional()
  @IsNumber()
  readonly venue_id;
  @IsOptional()
  @IsString()
  readonly url;
}
