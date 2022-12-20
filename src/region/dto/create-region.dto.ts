import { IsNumber, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsNumber()
  readonly country_id: number;

  @IsString()
  readonly name: string;
}
