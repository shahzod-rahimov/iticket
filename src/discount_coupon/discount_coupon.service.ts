import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DiscountCoupon } from './discount_coupon.model';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectModel(DiscountCoupon) private discountCoupon: typeof DiscountCoupon,
  ) {}
  async create(createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCoupon.create({ ...createDiscountCouponDto });
  }

  findAll() {
    return this.discountCoupon.findAll({
      include: { all: true },
    });
  }

  async findOne(id: number) {
    const discountCoupon = await this.discountCoupon.findOne({
      where: { id },
      include: { all: true },
    });
    if (!discountCoupon) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return discountCoupon;
  }

  async update(id: number, updateDiscountCouponDto: UpdateDiscountCouponDto) {
    const discountCoupon = await this.discountCoupon.update(
      updateDiscountCouponDto,
      {
        where: { id },
      },
    );

    if (!discountCoupon[0]) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Updated';
  }

  async remove(id: number) {
    const discountCoupon = await this.discountCoupon.destroy({ where: { id } });

    if (!discountCoupon) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
