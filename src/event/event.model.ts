import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'events' })
export class Event extends Model {
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
  photo: string;

  @Column({ type: DataType.DATEONLY })
  start_date: Date;

  @Column({ type: DataType.TIME })
  start_time: Date;

  @Column({ type: DataType.DATEONLY })
  finish_date: string;

  @Column({ type: DataType.TIME })
  finish_time: string;

  @Column({ type: DataType.TEXT })
  info: string;

  @Column({ type: DataType.INTEGER })
  event_type_id: number;

  @Column({ type: DataType.INTEGER })
  human_category_id: number;

  @Column({ type: DataType.INTEGER })
  venue_id: number;

  @Column({ type: DataType.SMALLINT })
  lang_id: number;

  @Column({ type: DataType.DATE })
  release_date: Date;
}
