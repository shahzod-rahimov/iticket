import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './gender.model';

@Injectable()
export class GenderService {
  constructor(@InjectModel(Gender) private gender: typeof Gender) {}
  async create(createGenderDto: CreateGenderDto) {
    return this.gender.create({ ...createGenderDto });
  }

  findAll() {
    return this.gender.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const gender = await this.gender.findOne({
      where: { id },
      include: { all: true },
    });
    if (!gender) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return gender;
  }

  async update(id: number, updateGenderDto: UpdateGenderDto) {
    const gender = await this.gender.update(updateGenderDto, {
      where: { id },
    });

    if (!gender[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const gender = await this.gender.destroy({ where: { id } });

    if (!gender) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
