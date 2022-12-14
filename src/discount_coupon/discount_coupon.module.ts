import { Module } from '@nestjs/common';
import { DiscountCouponService } from './discount_coupon.service';
import { DiscountCouponController } from './discount_coupon.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiscountCoupon } from './discount_coupon.model';

@Module({
  imports: [SequelizeModule.forFeature([DiscountCoupon])],
  providers: [DiscountCouponService],
  controllers: [DiscountCouponController],
})
export class DiscountCouponModule {}
