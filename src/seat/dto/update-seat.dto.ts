import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSeatDto {
  @ApiProperty({ example: '1', description: 'Sector number' })
  @IsOptional()
  @IsNumber()
  readonly sector: number;

  @ApiProperty({ example: '2', description: 'Row number' })
  @IsOptional()
  @IsNumber()
  readonly row_number: number;

  @ApiProperty({ example: '3', description: 'Seat number' })
  @IsOptional()
  @IsNumber()
  readonly number: number;

  @ApiProperty({ example: '4', description: 'Venue id' })
  @IsOptional()
  @IsNumber()
  readonly venue_id: number;

  @ApiProperty({ example: '5', description: 'Seat type id' })
  @IsOptional()
  @IsNumber()
  readonly seat_type_id: number;

  @ApiProperty({ example: 'kadsdjskjfkjk', description: 'Location in schema' })
  @IsOptional()
  @IsString()
  readonly location_in_schema: string;
}
