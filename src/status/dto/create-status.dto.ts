import { IsString } from 'class-validator';

export class CreateStatusDto {
  @IsString()
  readonly status_name: string;
}
