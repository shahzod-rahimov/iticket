import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscountCoupon } from './discount_coupon.model';
import { DiscountCouponService } from './discount_coupon.service';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';

@ApiTags('Discount coupon')
@Controller('discount-coupon')
export class DiscountCouponController {
  constructor(private readonly discountCouponService: DiscountCouponService) {}

  @ApiOperation({ summary: 'Create discount coupon' })
  @ApiResponse({ status: 201, type: DiscountCoupon })
  @Post()
  create(@Body() createDiscountCouponDto: CreateDiscountCouponDto) {
    return this.discountCouponService.create(createDiscountCouponDto);
  }

  @ApiOperation({ summary: 'Get all discount coupon' })
  @ApiResponse({ status: 201, type: [DiscountCoupon] })
  @Get()
  findAll() {
    return this.discountCouponService.findAll();
  }

  @ApiOperation({ summary: 'Get discount coupon by id' })
  @ApiResponse({ status: 201, type: DiscountCoupon })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountCouponService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update discount coupon' })
  @ApiResponse({ status: 201, type: DiscountCoupon })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiscountCouponDto: UpdateDiscountCouponDto,
  ) {
    return this.discountCouponService.update(+id, updateDiscountCouponDto);
  }

  @ApiOperation({ summary: 'Delete discount coupon' })
  @ApiResponse({ status: 201, type: DiscountCoupon })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discountCouponService.remove(+id);
  }
}
