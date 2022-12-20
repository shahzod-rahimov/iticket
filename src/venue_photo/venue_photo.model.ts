import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from 'src/venue/venue.model';

@Table({ tableName: 'venue-photos' })
export class VenuePhotos extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venue_id: number;

  @Column({ type: DataType.STRING })
  url: string;

  @BelongsTo(() => Venue)
  venue: Venue;
}
