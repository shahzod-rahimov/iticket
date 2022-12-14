import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'venue-photos' })
export class VenuePhotos extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  venue_id: number;

  @Column({ type: DataType.STRING })
  url: string;
}
