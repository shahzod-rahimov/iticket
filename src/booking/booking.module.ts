import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './booking.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from 'src/cart/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart, Booking])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
