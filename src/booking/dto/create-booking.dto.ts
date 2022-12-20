import { IsDateString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  readonly cart_id: number;
  @IsDateString()
  readonly createdAt: Date;
  @IsDateString()
  readonly fineshed: Date;
  @IsNumber()
  readonly payment_method_id: number;
  @IsNumber()
  readonly delivery_method_id: number;
  @IsNumber()
  readonly discount_coupon_id: number;
  @IsNumber()
  readonly status_id: number;
}
