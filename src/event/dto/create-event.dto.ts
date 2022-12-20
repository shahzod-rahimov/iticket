import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly photo: string;

  @IsDate()
  readonly start_date: Date;

  @IsDate()
  readonly start_time: Date;

  @IsDate()
  readonly finish_date: Date;

  @IsDate()
  readonly finish_time: Date;

  @IsString()
  readonly info: string;

  @IsNumber()
  readonly event_type_id: number;

  @IsNumber()
  readonly human_category_id: number;

  @IsNumber()
  readonly venue_id: number;

  @IsNumber()
  readonly lang_id: number;

  @IsDate()
  readonly release_date: Date;
}
