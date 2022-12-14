import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'admins' })
export class Admin extends Model {
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
  login: string;

  @Column({ type: DataType.STRING })
  hashed_password: string;

  @Column({ type: DataType.BOOLEAN })
  is_active: boolean;

  @Column({ type: DataType.BOOLEAN })
  is_creator: boolean;

  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;
}
