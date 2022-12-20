import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ example: '1', description: 'Cart id' })
  @IsNumber()
  readonly cart_id: number;

  @ApiProperty({ example: '22-02-2022', description: 'Created date' })
  @IsDateString()
  readonly createdAt: Date;

  @ApiProperty({ example: '22-02-2022', description: 'Fineshed date' })
  @IsDateString()
  readonly fineshed: Date;

  @ApiProperty({ example: '2', description: 'Payment method id' })
  @IsNumber()
  readonly payment_method_id: number;

  @ApiProperty({ example: '3', description: 'Delivery method id' })
  @IsNumber()
  readonly delivery_method_id: number;

  @ApiProperty({ example: '4', description: 'Discount coupon id' })
  @IsNumber()
  readonly discount_coupon_id: number;

  @ApiProperty({ example: '5', description: 'Status id' })
  @IsNumber()
  readonly status_id: number;
}
