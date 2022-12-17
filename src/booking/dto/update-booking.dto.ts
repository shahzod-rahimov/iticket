import { IsDate, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @IsOptional()
  @IsNumber()
  readonly cart_id;
  @IsOptional()
  @IsDateString()
  readonly createdAt;
  @IsOptional()
  @IsDateString()
  readonly fineshed;
  @IsOptional()
  @IsNumber()
  readonly payment_method_id;
  @IsOptional()
  @IsNumber()
  readonly delivery_method_id;
  @IsOptional()
  @IsNumber()
  readonly discount_coupon_id;
  @IsOptional()
  @IsNumber()
  readonly status_id;
}
