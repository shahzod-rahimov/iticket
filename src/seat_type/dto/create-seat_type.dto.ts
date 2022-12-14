import { IsString } from 'class-validator';

export class CreateSeatTypeDto {
  @IsString()
  readonly name;
}
