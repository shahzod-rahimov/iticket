import { IsDate, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  readonly cart_id;
  @IsDate()
  readonly createdAt;
  @IsDate()
  readonly fineshed;
  @IsNumber()
  readonly payment_method_id;
  @IsNumber()
  readonly delivery_method_id;
  @IsNumber()
  readonly discount_coupon_id;
  @IsNumber()
  readonly status_id;
}
