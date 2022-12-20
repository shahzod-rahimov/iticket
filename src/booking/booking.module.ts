import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './booking.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from 'src/cart/cart.model';
import { DeliveryMethod } from 'src/delivery_method/delivery_method.model';
import { DiscountCoupon } from 'src/discount_coupon/discount_coupon.model';

@Module({
  imports: [SequelizeModule.forFeature([Booking])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
