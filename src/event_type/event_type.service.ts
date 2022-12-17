import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from 'src/event/dto/create-event.dto';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './event_type.model';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private eventType: typeof EventType) {}
  async create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventType.create({ ...createEventTypeDto });
  }

  findAll() {
    return this.eventType.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const eventType = await this.eventType.findOne({
      where: { id },
      include: { all: true },
    });
    if (!eventType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return eventType;
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const eventType = await this.eventType.update(updateEventTypeDto, {
      where: { id },
    });

    if (!eventType[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const eventType = await this.eventType.destroy({ where: { id } });

    if (!eventType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
