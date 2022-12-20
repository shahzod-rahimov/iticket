import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.model';

@Table({ tableName: 'customer-cards' })
export class CustomerCard extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER })
  customer_id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.STRING })
  number: string;

  @Column({ type: DataType.STRING })
  year: string;

  @Column({ type: DataType.STRING })
  month: string;

  @Column({ type: DataType.BOOLEAN })
  is_active: string;

  @Column({ type: DataType.BOOLEAN })
  is_main: string;

  @BelongsTo(() => Customer)
  customer: Customer;
}
