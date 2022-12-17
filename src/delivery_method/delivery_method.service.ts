import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryMethod } from './delivery_method.model';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';


@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod) private deliveryMethod: typeof DeliveryMethod,
  ) {}
  
  async create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethod.create({ ...createDeliveryMethodDto });
  }

  findAll() {
    return this.deliveryMethod.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const deliveryMethod = await this.deliveryMethod.findOne({
      where: { id },
      include: { all: true },
    });
    if (!deliveryMethod) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return deliveryMethod;
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    const deliveryMethod = await this.deliveryMethod.update(
      updateDeliveryMethodDto,
      {
        where: { id },
      },
    );

    if (!deliveryMethod[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const deliveryMethod = await this.deliveryMethod.destroy({ where: { id } });

    if (!deliveryMethod) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
