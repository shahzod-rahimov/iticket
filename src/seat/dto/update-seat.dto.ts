import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSeatDto {
  @IsOptional()
  @IsNumber()
  readonly sector;
  @IsOptional()
  @IsNumber()
  readonly row_number;
  @IsOptional()
  @IsNumber()
  readonly number;
  @IsOptional()
  @IsNumber()
  readonly venue_id;
  @IsOptional()
  @IsNumber()
  readonly seat_type_id;
  @IsOptional()
  @IsString()
  readonly location_in_schema;
}
