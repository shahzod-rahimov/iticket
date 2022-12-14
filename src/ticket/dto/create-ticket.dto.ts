import { IsDate, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  readonly event_id;

  @IsNumber()
  readonly seat_id;

  @IsDate()
  readonly price;

  @IsDate()
  readonly service_fee;

  @IsNumber()
  readonly status_id;

  @IsNumber()
  readonly ticket_type;
}
