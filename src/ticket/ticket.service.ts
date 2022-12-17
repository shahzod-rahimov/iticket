import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticket: typeof Ticket) {}
  async create(createTicketDto: CreateTicketDto) {
    return this.ticket.create({ ...createTicketDto });
  }

  findAll() {
    return this.ticket.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const ticket = await this.ticket.findOne({
      where: { id },
      include: { all: true },
    });
    if (!ticket) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return ticket;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticket.update(updateTicketDto, {
      where: { id },
    });

    if (!ticket[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const ticket = await this.ticket.destroy({ where: { id } });

    if (!ticket) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
