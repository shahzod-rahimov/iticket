import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSeatDto {
  @ApiProperty({ example: '1', description: 'Sector number' })
  @IsNumber()
  readonly sector: number;

  @ApiProperty({ example: '2', description: 'Row number' })
  @IsNumber()
  readonly row_number: number;

  @ApiProperty({ example: '3', description: 'Seat number' })
  @IsNumber()
  readonly number: number;

  @ApiProperty({ example: '4', description: 'Venue id' })
  @IsNumber()
  readonly venue_id: number;

  @ApiProperty({ example: '5', description: 'Seat type id' })
  @IsNumber()
  readonly seat_type_id: number;

  @ApiProperty({ example: 'kadsdjskjfkjk', description: 'Location in schema' })
  @IsString()
  readonly location_in_schema: string;
}
