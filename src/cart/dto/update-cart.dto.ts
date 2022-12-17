import { IsDate, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateCartDto {
  @IsOptional()
  @IsNumber()
  readonly ticket_id;
  @IsOptional()
  @IsNumber()
  readonly customer_id;
  @IsOptional()
  @IsDateString()
  readonly createdAt;
  @IsOptional()
  @IsDateString()
  readonly fineshedAt;
  @IsOptional()
  @IsNumber()
  readonly status_id;
}
