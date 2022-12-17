import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './human_category.model';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humanCategory: typeof HumanCategory,
  ) {}
  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategory.create({ ...createHumanCategoryDto });
  }

  findAll() {
    return this.humanCategory.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const humanCategory = await this.humanCategory.findOne({
      where: { id },
      include: { all: true },
    });
    if (!humanCategory) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return humanCategory;
  }

  async update(id: number, UpdateHumanCategoryDto: UpdateHumanCategoryDto) {
    const humanCategory = await this.humanCategory.update(
      UpdateHumanCategoryDto,
      {
        where: { id },
      },
    );

    if (!humanCategory[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const humanCategory = await this.humanCategory.destroy({ where: { id } });

    if (!humanCategory) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
