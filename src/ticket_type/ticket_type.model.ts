import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'ticket_types' })
export class TicketType extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  ticket_type: string;
}
