import { IsOptional, IsString } from 'class-validator';

export class UpdateGenderDto {
  @IsOptional()
  @IsString()
  readonly value: string;
}
