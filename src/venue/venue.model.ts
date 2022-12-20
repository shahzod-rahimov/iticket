import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { District } from 'src/district/district.model';
import { Region } from 'src/region/region.model';
import { VenueType } from 'src/venue_type/venue_type.model';

@Table({ tableName: 'venues' })
export class Venue extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  address: string;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  site: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @ForeignKey(() => VenueType)
  @Column({ type: DataType.INTEGER })
  venue_type_id: number;

  @Column({ type: DataType.STRING })
  schema: string;

  @ForeignKey(() => Region)
  @Column({ type: DataType.SMALLINT })
  region_id: number;

  @ForeignKey(() => District)
  @Column({ type: DataType.SMALLINT })
  district_id: number;

  @BelongsTo(() => VenueType)
  venueType: VenueType;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;
}
