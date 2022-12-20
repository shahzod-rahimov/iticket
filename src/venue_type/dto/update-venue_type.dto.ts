import { IsOptional, IsString } from 'class-validator';

export class UpdateVenueTypeDto {
  @IsOptional()
  @IsString()
  readonly name: string;
}
