import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'languages' })
export class Language extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  language: string;
}
