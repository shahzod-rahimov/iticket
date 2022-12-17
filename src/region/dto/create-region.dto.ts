import { IsNumber, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsNumber()
  readonly country_id;

  @IsString()
  readonly name;
}
