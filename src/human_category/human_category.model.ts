import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Gender } from 'src/gender/gender.model';

@Table({ tableName: 'human-categories' })
export class HumanCategory extends Model {
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
  start_age: number;

  @Column({ type: DataType.SMALLINT })
  finish_age: number;

  @ForeignKey(() => Gender)
  @Column({ type: DataType.SMALLINT })
  gender: number;

  @BelongsTo(() => Gender)
  gender_value: Gender;
}
