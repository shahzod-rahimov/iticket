import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';

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

  @Column({ type: DataType.SMALLINT })
  delivery_method_id: number;

  @Column({ type: DataType.INTEGER })
  discount_coupon_id: number;

  @Column({ type: DataType.SMALLINT })
  status_id: number;

  @ForeignKey(() => Cart)
  @Column({ type: DataType.INTEGER })
  cart_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;
}
