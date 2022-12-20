import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({ example: 'Deadpool', description: 'Event name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'photo link', description: 'Event photo' })
  @IsString()
  readonly photo: string;

  @ApiProperty({ example: '01-01-2022', description: 'Start date' })
  @IsDateString()
  readonly start_date: Date;

  @ApiProperty({ example: '08:00', description: 'Start time' })
  @IsDateString()
  readonly start_time: Date;

  @ApiProperty({ example: '01-01-2022', description: 'Finish date' })
  @IsDateString()
  readonly finish_date: Date;

  @ApiProperty({ example: '10:00', description: 'Finish time' })
  @IsDateString()
  readonly finish_time: Date;

  @ApiProperty({ example: 'qwertyuiop', description: 'Event info' })
  @IsString()
  readonly info: string;

  @ApiProperty({ example: '1', description: 'Event type id' })
  @IsNumber()
  readonly event_type_id: number;

  @ApiProperty({ example: '2', description: 'Human category id' })
  @IsNumber()
  readonly human_category_id: number;

  @ApiProperty({ example: '3', description: 'Venue id' })
  @IsNumber()
  readonly venue_id: number;

  @ApiProperty({ example: '4', description: 'Language id' })
  @IsNumber()
  readonly lang_id: number;

  @ApiProperty({ example: '02-02-2022', description: 'Release date' })
  @IsDateString()
  readonly release_date: Date;
}
