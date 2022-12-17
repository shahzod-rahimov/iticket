import { IsDate, IsDateString, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  readonly ticket_id;

  @IsNumber()
  readonly customer_id;

  @IsDateString()
  readonly createdAt;

  @IsDateString()
  readonly fineshedAt;

  @IsNumber()
  readonly status_id;
}
