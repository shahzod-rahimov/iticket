import { IsNumber, IsString } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  readonly name;
  @IsString()
  readonly address;
  @IsString()
  readonly location;
  @IsString()
  readonly site;
  @IsString()
  readonly phone;
  @IsNumber()
  readonly venue_type_id;
  @IsString()
  readonly schema;
  @IsNumber()
  readonly region_id;
  @IsNumber()
  readonly district_id;
}
