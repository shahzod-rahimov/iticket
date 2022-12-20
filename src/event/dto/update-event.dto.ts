import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @ApiProperty({ example: 'Deadpool', description: 'Event name' })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'photo link', description: 'Event photo' })
  @IsOptional()
  @IsString()
  readonly photo: string;

  @ApiProperty({ example: '01-01-2022', description: 'Start date' })
  @IsOptional()
  @IsDate()
  readonly start_date: Date;

  @ApiProperty({ example: '08:00', description: 'Start time' })
  @IsOptional()
  @IsDate()
  readonly start_time: Date;

  @ApiProperty({ example: '01-01-2022', description: 'Finish date' })
  @IsOptional()
  @IsDate()
  readonly finish_date: Date;

  @ApiProperty({ example: '10:00', description: 'Finish time' })
  @IsOptional()
  @IsDate()
  readonly finish_time: Date;

  @ApiProperty({ example: 'qwertyuiop', description: 'Event info' })
  @IsOptional()
  @IsString()
  readonly info: string;

  @ApiProperty({ example: '1', description: 'Event type id' })
  @IsOptional()
  @IsNumber()
  readonly event_type_id: number;

  @ApiProperty({ example: '2', description: 'Human category id' })
  @IsOptional()
  @IsNumber()
  readonly human_category_id: number;

  @ApiProperty({ example: '3', description: 'Venue id' })
  @IsOptional()
  @IsNumber()
  readonly venue_id: number;

  @ApiProperty({ example: '4', description: 'Language id' })
  @IsOptional()
  @IsNumber()
  readonly lang_id: number;

  @ApiProperty({ example: '02-02-2022', description: 'Release date' })
  @IsOptional()
  @IsDate()
  readonly release_date: Date;
}
