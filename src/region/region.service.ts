import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private region: typeof Region) {}
  async create(createRegionDto: CreateRegionDto) {
    return this.region.create({ ...createRegionDto });
  }

  findAll() {
    return this.region.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const region = await this.region.findOne({
      where: { id },
      include: { all: true },
    });
    if (!region) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.region.update(updateRegionDto, {
      where: { id },
    });

    if (!region[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const region = await this.region.destroy({ where: { id } });

    if (!region) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
