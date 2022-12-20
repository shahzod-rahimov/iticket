import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty({ example: '1', description: 'Event id' })
  @IsNumber()
  readonly event_id: number;

  @ApiProperty({ example: '2', description: 'Seat id' })
  @IsNumber()
  readonly seat_id: number;

  @ApiProperty({ example: '10000', description: 'Price' })
  @IsNumber()
  readonly price: number;

  @ApiProperty({ example: '100', description: 'Service fee' })
  @IsNumber()
  readonly service_fee: number;

  @ApiProperty({ example: '3', description: 'Status id' })
  @IsNumber()
  readonly status: number;

  @ApiProperty({ example: '4', description: 'Ticket type id' })
  @IsNumber()
  readonly ticket_type: number;
}
