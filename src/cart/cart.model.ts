import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Status } from 'src/status/status.model';

@Table({ tableName: 'carts' })
export class Cart extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  ticket_id: number;

  @Column({ type: DataType.INTEGER })
  customer_id: number;

  @Column({ type: DataType.DATE })
  createdAt: number;

  @Column({ type: DataType.DATE })
  fineshedAt: number;

  @ForeignKey(() => Status)
  @Column({ type: DataType.SMALLINT })
  status_id: number;

  @BelongsTo(() => Status)
  status: Status;
}
