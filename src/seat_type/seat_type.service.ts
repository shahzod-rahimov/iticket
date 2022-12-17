import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatType: typeof SeatType) {}
  async create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatType.create({ ...createSeatTypeDto });
  }

  findAll() {
    return this.seatType.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const seatType = await this.seatType.findOne({
      where: { id },
      include: { all: true },
    });
    if (!seatType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return seatType;
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seatType = await this.seatType.update(updateSeatTypeDto, {
      where: { id },
    });

    if (!seatType[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const seatType = await this.seatType.destroy({ where: { id } });

    if (!seatType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
