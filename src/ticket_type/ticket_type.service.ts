import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './ticket_type.model';

@Injectable()
export class TicketTypeService {
  constructor(@InjectModel(TicketType) private ticketType: typeof TicketType) {}
  async create(createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketType.create({ ...createTicketTypeDto });
  }

  findAll() {
    return this.ticketType.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const ticketType = await this.ticketType.findOne({
      where: { id },
      include: { all: true },
    });
    if (!ticketType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return ticketType;
  }

  async update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    const ticketType = await this.ticketType.update(updateTicketTypeDto, {
      where: { id },
    });

    if (!ticketType[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const ticketType = await this.ticketType.destroy({ where: { id } });

    if (!ticketType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
