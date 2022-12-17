import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRegionDto {
  @IsOptional()
  @IsNumber()
  readonly country_id;

  @IsOptional()
  @IsString()
  readonly name;
}
