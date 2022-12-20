import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './event.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private event: typeof Event) {}
  async create(createEventDto: CreateEventDto) {
    return this.event.create({ ...createEventDto });
  }

  findAll() {
    return this.event.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const event = await this.event.findOne({
      where: { id },
      include: { all: true },
    });
    if (!event) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.event.update(updateEventDto, {
      where: { id },
    });

    if (!event[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const event = await this.event.destroy({ where: { id } });

    if (!event) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
