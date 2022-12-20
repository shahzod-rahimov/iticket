import { IsString } from 'class-validator';

export class CreateVenueTypeDto {
  @IsString()
  readonly name: string;
}
