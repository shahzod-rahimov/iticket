import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'discount_coupons' })
export class DiscountCoupon extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  coupon_name: string;
}
