import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDiscountCouponDto {
  @ApiProperty({ example: 'Ramadan', description: 'Cupon name' })
  @IsString()
  readonly coupon_name: string;
}
