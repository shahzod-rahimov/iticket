import { IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  readonly event_id;

  @IsNumber()
  readonly seat_id;

  @IsNumber()
  readonly price;

  @IsNumber()
  readonly service_fee;

  @IsNumber()
  readonly status;

  @IsNumber()
  readonly ticket_type;
}
