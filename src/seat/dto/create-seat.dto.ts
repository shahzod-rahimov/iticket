import { IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  @IsNumber()
  readonly sector: number;
  @IsNumber()
  readonly row_number: number;
  @IsNumber()
  readonly number: number;
  @IsNumber()
  readonly venue_id: number;
  @IsNumber()
  readonly seat_type_id: number;
  @IsString()
  readonly location_in_schema: string;
}
