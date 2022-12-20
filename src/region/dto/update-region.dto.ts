import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRegionDto {
  @IsOptional()
  @IsNumber()
  readonly country_id: number;

  @IsOptional()
  @IsString()
  readonly name: string;
}
