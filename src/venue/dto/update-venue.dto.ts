import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVenueDto {
  @IsOptional()
  @IsString()
  readonly name;

  @IsOptional()
  @IsString()
  readonly address;

  @IsOptional()
  @IsString()
  readonly location;

  @IsOptional()
  @IsString()
  readonly site;

  @IsOptional()
  @IsString()
  readonly phone;

  @IsOptional()
  @IsNumber()
  readonly venue_type_id;

  @IsOptional()
  @IsString()
  readonly schema;

  @IsOptional()
  @IsNumber()
  readonly region_id;

  @IsOptional()
  @IsNumber()
  readonly district_id;
}
