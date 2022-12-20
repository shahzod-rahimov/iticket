import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly photo: string;

  @IsOptional()
  @IsDate()
  readonly start_date: Date;

  @IsOptional()
  @IsDate()
  readonly start_time: Date;

  @IsOptional()
  @IsDate()
  readonly finish_date: Date;

  @IsOptional()
  @IsDate()
  readonly finish_time: Date;

  @IsOptional()
  @IsString()
  readonly info: string;

  @IsOptional()
  @IsNumber()
  readonly event_type_id: number;

  @IsOptional()
  @IsNumber()
  readonly human_category_id: number;

  @IsOptional()
  @IsNumber()
  readonly venue_id: number;

  @IsOptional()
  @IsNumber()
  readonly lang_id: number;

  @IsOptional()
  @IsDate()
  readonly release_date: Date;
}
