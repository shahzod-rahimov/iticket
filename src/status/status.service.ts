import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private status: typeof Status) {}
  async create(createStatusDto: CreateStatusDto) {
    return this.status.create({ ...createStatusDto });
  }

  findAll() {
    return this.status.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const status = await this.status.findOne({
      where: { id },
      include: { all: true },
    });
    if (!status) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return status;
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const status = await this.status.update(updateStatusDto, {
      where: { id },
    });

    if (!status[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const status = await this.status.destroy({ where: { id } });

    if (!status) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
