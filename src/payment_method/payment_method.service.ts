import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod) private paymentMethod: typeof PaymentMethod,
  ) {}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethod.create({ ...createPaymentMethodDto });
  }

  findAll() {
    return this.paymentMethod.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const paymentMethod = await this.paymentMethod.findOne({
      where: { id },
      include: { all: true },
    });
    if (!paymentMethod) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return paymentMethod;
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const paymentMethod = await this.paymentMethod.update(
      updatePaymentMethodDto,
      {
        where: { id },
      },
    );

    if (!paymentMethod[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const paymentMethod = await this.paymentMethod.destroy({ where: { id } });

    if (!paymentMethod) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
