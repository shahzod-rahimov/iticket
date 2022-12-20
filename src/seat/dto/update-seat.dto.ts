import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSeatDto {
  @IsOptional()
  @IsNumber()
  readonly sector: number;
  @IsOptional()
  @IsNumber()
  readonly row_number: number;
  @IsOptional()
  @IsNumber()
  readonly number: number;
  @IsOptional()
  @IsNumber()
  readonly venue_id: number;
  @IsOptional()
  @IsNumber()
  readonly seat_type_id: number;
  @IsOptional()
  @IsString()
  readonly location_in_schema: string;
}
