import { IsOptional, IsString } from 'class-validator';

export class UpdateLanguagesDto {
  @IsString()
  @IsOptional()
  readonly language;
}
