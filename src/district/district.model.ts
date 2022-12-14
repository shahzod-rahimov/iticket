import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'districts' })
export class District extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  region_id: number;

  @Column({ type: DataType.STRING })
  name: string;
}
