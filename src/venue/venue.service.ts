import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './venue.model';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venue: typeof Venue) {}
  async create(createVenueDto: CreateVenueDto) {
    return this.venue.create({ ...createVenueDto });
  }

  findAll() {
    return this.venue.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const venue = await this.venue.findOne({
      where: { id },
      include: { all: true },
    });
    if (!venue) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return venue;
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = await this.venue.update(updateVenueDto, {
      where: { id },
    });

    if (!venue[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const venue = await this.venue.destroy({ where: { id } });

    if (!venue) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
