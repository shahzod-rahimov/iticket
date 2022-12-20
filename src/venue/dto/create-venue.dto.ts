import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly address: string;
  @IsString()
  readonly location: string;
  @IsString()
  readonly site: string;
  @IsPhoneNumber('UZ')
  readonly phone: string;
  @IsNumber()
  readonly venue_type_id: number;
  @IsString()
  readonly schema: string;
  @IsNumber()
  readonly region_id: number;
  @IsNumber()
  readonly district_id: number;
}
