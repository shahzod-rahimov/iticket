import { IsNumber, IsString } from 'class-validator';

export class CreateVenuePhotoDto {
  @IsNumber()
  readonly venue_id;
  @IsString()
  readonly url;
}
