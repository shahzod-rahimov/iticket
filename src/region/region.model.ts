import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Country } from 'src/countries/countries.model';

@Table({ tableName: 'regions' })
export class Region extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  country_id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @BelongsTo(() => Country)
  country: Country;
}
