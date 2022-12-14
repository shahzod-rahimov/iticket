import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'delivery_methods' })
export class DeliveryMethod extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  method_name: string;
}
