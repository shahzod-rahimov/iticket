import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'venue-types' })
export class VenueType extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;
}
