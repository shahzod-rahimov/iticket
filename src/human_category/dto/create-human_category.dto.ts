import { IsNumber, IsString } from 'class-validator';

export class CreateHumanCategoryDto {
  @IsString()
  readonly name;
  @IsNumber()
  readonly start_age;
  @IsNumber()
  readonly finish_age;
  @IsNumber()
  readonly gender;
}
