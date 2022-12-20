import { IsDate, IsDateString, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  readonly ticket_id: number;

  @IsNumber()
  readonly customer_id: number;

  @IsDateString()
  readonly createdAt: Date;

  @IsDateString()
  readonly fineshedAt: Date;

  @IsNumber()
  readonly status_id: number;
}
