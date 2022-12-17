import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDistrictDto {
  @IsOptional()
  @IsNumber()
  readonly region_id;
  @IsOptional()
  @IsString()
  readonly name;
}
