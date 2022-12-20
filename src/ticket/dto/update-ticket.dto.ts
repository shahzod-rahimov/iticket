import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNumber, IsOptional } from 'class-validator';

export class UpdateTicketDto {
  @ApiProperty({ example: '1', description: 'Event id' })
  @IsOptional()
  @IsNumber()
  readonly event_id: number;

  @ApiProperty({ example: '2', description: 'Seat id' })
  @IsOptional()
  @IsNumber()
  readonly seat_id: number;

  @ApiProperty({ example: '10000', description: 'Price' })
  @IsOptional()
  @IsDecimal()
  readonly price: number;

  @ApiProperty({ example: '100', description: 'Service fee' })
  @IsOptional()
  @IsDecimal()
  readonly service_fee: number;

  @ApiProperty({ example: '3', description: 'Status id' })
  @IsOptional()
  @IsNumber()
  readonly status: number;

  @ApiProperty({ example: '4', description: 'Ticket type id' })
  @IsOptional()
  @IsNumber()
  readonly ticket_type: number;
}
