import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'venues' })
export class Venue extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  address: string;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  site: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.INTEGER })
  venue_type_id: number;

  @Column({ type: DataType.STRING })
  schema: string;

  @Column({ type: DataType.SMALLINT })
  region_id: number;

  @Column({ type: DataType.SMALLINT })
  district_id: number;
}
