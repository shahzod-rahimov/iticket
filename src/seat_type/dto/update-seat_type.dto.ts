import { IsOptional, IsString } from 'class-validator';

export class UpdateSeatTypeDto {
  @IsOptional()
  @IsString()
  readonly name: string;
}
