import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'seats' })
export class Seat extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.SMALLINT })
  sector: number;

  @Column({ type: DataType.SMALLINT })
  row_number: number;

  @Column({ type: DataType.SMALLINT })
  number: number;

  @Column({ type: DataType.INTEGER })
  venue_id: number;

  @Column({ type: DataType.SMALLINT })
  seat_type_id: number;

  @Column({ type: DataType.STRING })
  location_in_schema: string;
}
