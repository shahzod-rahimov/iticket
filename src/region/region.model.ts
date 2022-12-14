import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'regions' })
export class Region extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  country_id: number;

  @Column({ type: DataType.STRING })
  name: string;
}
