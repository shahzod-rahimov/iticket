import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Country } from 'src/countries/countries.model';
import { Customer } from 'src/customer/customer.model';
import { District } from 'src/district/district.model';
import { Region } from 'src/region/region.model';

@Table({ tableName: 'customer-addresses' })
export class CustomerAddress extends Model {
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

  @ForeignKey(() => Country)
  @Column({ type: DataType.SMALLINT })
  country_id: number;

  @ForeignKey(() => Region)
  @Column({ type: DataType.SMALLINT })
  region_id: number;

  @ForeignKey(() => District)
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

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Country)
  country: Country;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;
}
