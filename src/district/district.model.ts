import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Region } from 'src/region/region.model';

@Table({ tableName: 'districts' })
export class District extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER })
  region_id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @BelongsTo(() => Region)
  region: Region;
}
