import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'tickets' })
export class Ticket extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  event_id: number;

  @Column({ type: DataType.INTEGER })
  seat_id: number;

  @Column({ type: DataType.INTEGER })
  price: number;

  @Column({ type: DataType.INTEGER })
  service_fee: number;

  @Column({ type: DataType.SMALLINT })
  status: number;

  @Column({ type: DataType.SMALLINT })
  ticket_type: number;
}
