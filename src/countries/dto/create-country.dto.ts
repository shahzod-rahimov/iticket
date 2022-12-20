import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty({ example: 'Uzbekistan', description: 'Country name' })
  @IsString()
  readonly name;
}
