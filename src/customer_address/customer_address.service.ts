import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './customer-address.model';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress)
    private customerAddress: typeof CustomerAddress,
  ) {}
  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddress.create({ ...createCustomerAddressDto });
  }

  findAll() {
    return this.customerAddress.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const customerAddress = await this.customerAddress.findOne({
      where: { id },
      include: { all: true },
    });
    if (!customerAddress) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return customerAddress;
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    const customerAddress = await this.customerAddress.update(
      UpdateCustomerAddressDto,
      {
        where: { id },
      },
    );

    if (!customerAddress[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const customerAddress = await this.customerAddress.destroy({
      where: { id },
    });

    if (!customerAddress) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
