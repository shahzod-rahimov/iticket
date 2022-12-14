import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'event-types' })
export class EventType extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.SMALLINT })
  parent_event_type_id: number;
}
