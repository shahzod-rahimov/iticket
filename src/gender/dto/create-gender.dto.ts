import { IsString } from 'class-validator';

export class CreateGenderDto {
  @IsString()
  readonly value;
}
