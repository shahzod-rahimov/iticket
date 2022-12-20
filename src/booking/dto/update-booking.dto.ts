import { IsDate, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @IsOptional()
  @IsNumber()
  readonly cart_id: number;
  @IsOptional()
  @IsDateString()
  readonly createdAt: Date;
  @IsOptional()
  @IsDateString()
  readonly fineshed: Date;
  @IsOptional()
  @IsNumber()
  readonly payment_method_id: number;
  @IsOptional()
  @IsNumber()
  readonly delivery_method_id: number;
  @IsOptional()
  @IsNumber()
  readonly discount_coupon_id: number;
  @IsOptional()
  @IsNumber()
  readonly status_id: number;
}
