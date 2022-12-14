import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'genders' })
export class Gender extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  value: string;
}
