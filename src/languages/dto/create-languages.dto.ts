import { IsString } from 'class-validator';

export class CreateLanguagesDto {
  @IsString()
  readonly language: string;
}
