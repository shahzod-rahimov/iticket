import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingModel: typeof Booking) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingModel.create({ ...createBookingDto });
  }

  findAll() {
    return this.bookingModel.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const booking = await this.bookingModel.findOne({
      where: { id },
      include: { all: true },
    });
    if (!booking) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return booking;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingModel.update(updateBookingDto, {
      where: { id },
    });
    console.log(booking);
    if (!booking[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const booking = await this.bookingModel.destroy({ where: { id } });

    if (!booking) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
