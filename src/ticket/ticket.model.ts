import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Event } from 'src/event/event.model';
import { Seat } from 'src/seat/seat.model';

@Table({ tableName: 'tickets' })
export class Ticket extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Event)
  @Column({ type: DataType.INTEGER })
  event_id: number;

  @ForeignKey(() => Seat)
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

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => Seat)
  seat: Seat;
}
