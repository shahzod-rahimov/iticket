import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { SeatType } from 'src/seat_type/seat_type.model';
import { Venue } from 'src/venue/venue.model';

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

  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venue_id: number;

  @ForeignKey(() => SeatType)
  @Column({ type: DataType.SMALLINT })
  seat_type_id: number;

  @Column({ type: DataType.STRING })
  location_in_schema: string;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => SeatType)
  seatType: SeatType;
}
