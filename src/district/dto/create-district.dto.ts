import { IsNumber, IsString } from 'class-validator';

export class CreateDistrictDto {
  @IsNumber()
  readonly region_id: number;
  @IsString()
  readonly name: string;
}
