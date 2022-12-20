import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { DeliveryMethod } from 'src/delivery_method/delivery_method.model';
import { DiscountCoupon } from 'src/discount_coupon/discount_coupon.model';
import { Status } from 'src/status/status.model';

@Table({ tableName: 'bookings' })
export class Booking extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.DATE })
  createdAt: Date;

  @Column({ type: DataType.DATE })
  fineshed: Date;

  @Column({ type: DataType.SMALLINT })
  payment_method_id: number;

  @ForeignKey(() => DeliveryMethod)
  @Column({ type: DataType.SMALLINT })
  delivery_method_id: number;

  @ForeignKey(() => DiscountCoupon)
  @Column({ type: DataType.INTEGER })
  discount_coupon_id: number;

  @ForeignKey(() => Status)
  @Column({ type: DataType.SMALLINT })
  status_id: number;

  @ForeignKey(() => Cart)
  @Column({ type: DataType.INTEGER })
  cart_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @BelongsTo(() => DeliveryMethod)
  delivery_method: DeliveryMethod;

  @BelongsTo(() => DiscountCoupon)
  discount_coupon: DiscountCoupon;

  @BelongsTo(() => Status)
  status: Status;
}
