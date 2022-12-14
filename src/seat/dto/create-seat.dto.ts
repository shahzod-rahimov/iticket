import { IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  @IsNumber()
  readonly sector;
  @IsNumber()
  readonly row_number;
  @IsNumber()
  readonly number;
  @IsNumber()
  readonly venue_id;
  @IsNumber()
  readonly seat_type_id;
  @IsString()
  readonly location_in_schema;
}
