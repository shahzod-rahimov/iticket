import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { EventType } from 'src/event_type/event_type.model';
import { HumanCategory } from 'src/human_category/human_category.model';
import { Language } from 'src/languages/languages.model';
import { Venue } from 'src/venue/venue.model';

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

  @ForeignKey(() => EventType)
  @Column({ type: DataType.INTEGER })
  event_type_id: number;

  @ForeignKey(() => HumanCategory)
  @Column({ type: DataType.INTEGER })
  human_category_id: number;

  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venue_id: number;

  @ForeignKey(() => Language)
  @Column({ type: DataType.SMALLINT })
  lang_id: number;

  @Column({ type: DataType.DATE })
  release_date: Date;

  @BelongsTo(() => EventType)
  eventType: EventType;

  @BelongsTo(() => HumanCategory)
  humanCategory: HumanCategory;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => Language)
  language: Language;
}
