import { IsNumber, IsString } from 'class-validator';

export class CreateHumanCategoryDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly start_age: number;
  @IsNumber()
  readonly finish_age: number;
  @IsNumber()
  readonly gender: number;
}
