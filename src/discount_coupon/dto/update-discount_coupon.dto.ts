import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDiscountCouponDto {
  @ApiProperty({ example: 'Ramadan', description: 'Cupon name' })
  @IsOptional()
  @IsString()
  readonly coupon_name: string;
}
