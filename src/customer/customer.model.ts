import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Gender } from 'src/gender/gender.model';
import { Language } from 'src/languages/languages.model';

@Table({ tableName: 'customers' })
export class Customer extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;

  @ForeignKey(() => Gender)
  @Column({
    type: DataType.SMALLINT,
  })
  gender: number;

  @ForeignKey(() => Language)
  @Column({
    type: DataType.SMALLINT,
  })
  lang_id: number;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @BelongsTo(() => Gender)
  gender_value: Gender;

  @BelongsTo(() => Language)
  language: Language;
}
