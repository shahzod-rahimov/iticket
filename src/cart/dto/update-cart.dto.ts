import { IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateCartDto {
  @IsOptional()
  @IsNumber()
  readonly ticket_id: number;
  @IsOptional()
  @IsNumber()
  readonly customer_id: number;
  @IsOptional()
  @IsDateString()
  readonly createdAt: Date;
  @IsOptional()
  @IsDateString()
  readonly fineshedAt: Date;
  @IsOptional()
  @IsNumber()
  readonly status_id: number;
}
