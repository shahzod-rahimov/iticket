import { IsDate, IsDecimal, IsNumber, IsOptional } from 'class-validator';

export class UpdateTicketDto {
  @IsOptional()
  @IsNumber()
  readonly event_id;

  @IsOptional()
  @IsNumber()
  readonly seat_id;

  @IsOptional()
  @IsDecimal()
  readonly price;

  @IsOptional()
  @IsDecimal()
  readonly service_fee;

  @IsOptional()
  @IsNumber()
  readonly status;

  @IsOptional()
  @IsNumber()
  readonly ticket_type;
}
