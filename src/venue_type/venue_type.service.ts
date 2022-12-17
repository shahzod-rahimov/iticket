import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueType: typeof VenueType) {}
  async create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueType.create({ ...createVenueTypeDto });
  }

  findAll() {
    return this.venueType.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const venueType = await this.venueType.findOne({
      where: { id },
      include: { all: true },
    });
    if (!venueType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return venueType;
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venueType = await this.venueType.update(updateVenueTypeDto, {
      where: { id },
    });

    if (!venueType[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const venueType = await this.venueType.destroy({ where: { id } });

    if (!venueType) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
