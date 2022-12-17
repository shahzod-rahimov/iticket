import { IsNumber, IsString } from 'class-validator';

export class CreateDistrictDto {
  @IsNumber()
  readonly region_id;
  @IsString()
  readonly name;
}
