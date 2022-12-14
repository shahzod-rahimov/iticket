import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateHumanCategoryDto {
  @IsOptional()
  @IsString()
  readonly name;
  @IsOptional()
  @IsNumber()
  readonly start_age;
  @IsOptional()
  @IsNumber()
  readonly finish_age;
  @IsOptional()
  @IsNumber()
  readonly gender;
}
