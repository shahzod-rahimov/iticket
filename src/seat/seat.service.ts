import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './seat.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seat: typeof Seat) {}
  async create(createSeatDto: CreateSeatDto) {
    return this.seat.create({ ...createSeatDto });
  }

  findAll() {
    return this.seat.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const seat = await this.seat.findOne({
      where: { id },
      include: { all: true },
    });
    if (!seat) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return seat;
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.seat.update(updateSeatDto, {
      where: { id },
    });

    if (!seat[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const seat = await this.seat.destroy({ where: { id } });

    if (!seat) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
