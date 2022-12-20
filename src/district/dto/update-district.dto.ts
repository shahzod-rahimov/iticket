import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDistrictDto {
  @IsOptional()
  @IsNumber()
  readonly region_id: number;
  @IsOptional()
  @IsString()
  readonly name: string;
}
