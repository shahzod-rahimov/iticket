import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguagesDto } from './dto/create-languages.dto';
import { UpdateLanguagesDto } from './dto/update-languages.dto';
import { Language } from './languages.model';

@Injectable()
export class LanguagesService {
  constructor(@InjectModel(Language) private language: typeof Language) {}
  async create(createLanguagesDto: CreateLanguagesDto) {
    return this.language.create({ ...createLanguagesDto });
  }

  findAll() {
    return this.language.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const language = await this.language.findOne({
      where: { id },
      include: { all: true },
    });
    if (!language) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return language;
  }

  async update(id: number, updateLanguagesDto: UpdateLanguagesDto) {
    const language = await this.language.update(updateLanguagesDto, {
      where: { id },
    });

    if (!language[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const language = await this.language.destroy({ where: { id } });

    if (!language) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
