import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'customer-addresses' })
export class CustomerAddress extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  customer_id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.SMALLINT })
  country_id: number;

  @Column({ type: DataType.SMALLINT })
  region_id: number;

  @Column({ type: DataType.SMALLINT })
  district_id: number;

  @Column({ type: DataType.STRING })
  street: string;

  @Column({ type: DataType.STRING })
  house: string;

  @Column({ type: DataType.SMALLINT })
  flat: number;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  post_index: string;

  @Column({ type: DataType.TEXT })
  info: string;
}
