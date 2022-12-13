import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Booking extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  cart_id: number;

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
}
