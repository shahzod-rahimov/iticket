import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  readonly name;

  @IsString()
  readonly photo;

  @IsDate()
  readonly start_date;

  @IsDate()
  readonly start_time;

  @IsDate()
  readonly finish_date;

  @IsDate()
  readonly finish_time;

  @IsString()
  readonly info;

  @IsNumber()
  readonly event_type_id;

  @IsNumber()
  readonly human_category_id;

  @IsNumber()
  readonly venue_id;

  @IsNumber()
  readonly lang_id;

  @IsDate()
  readonly release_date;
}
