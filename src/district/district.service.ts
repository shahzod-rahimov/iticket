import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './district.model';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private district: typeof District) {}
  async create(createDistrictDto: CreateDistrictDto) {
    return this.district.create({ ...createDistrictDto });
  }

  findAll() {
    return this.district.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const district = await this.district.findOne({
      where: { id },
      include: { all: true },
    });
    if (!district) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = await this.district.update(updateDistrictDto, {
      where: { id },
    });

    if (!district[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const district = await this.district.destroy({ where: { id } });

    if (!district) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
