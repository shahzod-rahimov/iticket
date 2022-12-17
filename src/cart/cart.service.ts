import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}
  create(createCartDto: CreateCartDto) {
    return this.cartModel.create({ ...createCartDto });
  }

  findAll() {
    return this.cartModel.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const cart = await this.cartModel.findOne({
      where: { id },
      include: { all: true },
    });
    if (!cart) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return cart;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartModel.update(updateCartDto, {
      where: { id },
    });
    console.log(cart);
    if (!cart[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const cart = await this.cartModel.destroy({ where: { id } });

    if (!cart) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
