import { IsOptional, IsString } from 'class-validator';

export class UpdateDiscountCouponDto {
  @IsOptional()
  @IsString()
  readonly coupon_name: string;
}
