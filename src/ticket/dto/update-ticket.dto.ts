import { IsDate, IsNumber } from 'class-validator';

export class UpdateTicketDto {
  @IsNumber()
  readonly ticket_id;

  @IsNumber()
  readonly customer_id;

  @IsDate()
  readonly createdAt;

  @IsDate()
  readonly fineshedAt;

  @IsNumber()
  readonly status_id;
}
