import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @ApiProperty({ example: '1', description: 'Cart id' })
  @IsOptional()
  @IsNumber()
  readonly cart_id: number;

  @ApiProperty({ example: '22-02-2022', description: 'Created date' })
  @IsOptional()
  @IsDateString()
  readonly createdAt: Date;

  @ApiProperty({ example: '22-02-2022', description: 'Fineshed date' })
  @IsOptional()
  @IsDateString()
  readonly fineshed: Date;

  @ApiProperty({ example: '2', description: 'Payment method id' })
  @IsOptional()
  @IsNumber()
  readonly payment_method_id: number;

  @ApiProperty({ example: '3', description: 'Delivery method id' })
  @IsOptional()
  @IsNumber()
  readonly delivery_method_id: number;

  @ApiProperty({ example: '4', description: 'Discount coupon id' })
  @IsOptional()
  @IsNumber()
  readonly discount_coupon_id: number;

  @ApiProperty({ example: '5', description: 'Status id' })
  @IsOptional()
  @IsNumber()
  readonly status_id: number;
}
