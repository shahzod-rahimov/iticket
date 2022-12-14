import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsOptional()
  @IsString()
  readonly name;

  @IsOptional()
  @IsString()
  readonly photo;

  @IsOptional()
  @IsDate()
  readonly start_date;

  @IsOptional()
  @IsDate()
  readonly start_time;

  @IsOptional()
  @IsDate()
  readonly finish_date;

  @IsOptional()
  @IsDate()
  readonly finish_time;

  @IsOptional()
  @IsString()
  readonly info;

  @IsOptional()
  @IsNumber()
  readonly event_type_id;

  @IsOptional()
  @IsNumber()
  readonly human_category_id;

  @IsOptional()
  @IsNumber()
  readonly venue_id;

  @IsOptional()
  @IsNumber()
  readonly lang_id;

  @IsOptional()
  @IsDate()
  readonly release_date;
}
