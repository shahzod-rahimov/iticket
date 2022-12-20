import { IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  readonly event_id: number;

  @IsNumber()
  readonly seat_id: number;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly service_fee: number;

  @IsNumber()
  readonly status: number;

  @IsNumber()
  readonly ticket_type: number;
}
