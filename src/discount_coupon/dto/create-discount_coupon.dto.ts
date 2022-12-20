import { IsString } from 'class-validator';

export class CreateDiscountCouponDto {
  @IsString()
  readonly coupon_name: string;
}
