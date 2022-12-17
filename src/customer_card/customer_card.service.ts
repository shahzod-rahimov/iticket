import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './customer_card.model';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard) private customerCard: typeof CustomerCard,
  ) {}
  async create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCard.create({ ...createCustomerCardDto });
  }

  findAll() {
    return this.customerCard.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const customerCard = await this.customerCard.findOne({
      where: { id },
      include: { all: true },
    });
    if (!customerCard) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return customerCard;
  }

  async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    const customerCard = await this.customerCard.update(updateCustomerCardDto, {
      where: { id },
    });

    if (!customerCard[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const customerCard = await this.customerCard.destroy({ where: { id } });

    if (!customerCard) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
