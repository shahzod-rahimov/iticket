import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './countries.model';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountriesService {
  constructor(@InjectModel(Country) private country: typeof Country) {}
  async create(createCountryDto: CreateCountryDto) {
    const isExists = await this.country.findOne({
      where: { name: createCountryDto.name },
    });

    if (isExists) {
      throw new HttpException('Bunday davlat mavjud', HttpStatus.BAD_REQUEST);
    }
    return this.country.create({ ...createCountryDto });
  }

  findAll() {
    return this.country.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const country = await this.country.findOne({
      where: { id },
      include: { all: true },
    });
    if (!country) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.country.update(updateCountryDto, {
      where: { id },
    });
    
    if (!country[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const country = await this.country.destroy({ where: { id } });

    if (!country) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
