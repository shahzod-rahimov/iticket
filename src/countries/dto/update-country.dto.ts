import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCountryDto {
  @ApiProperty({ example: 'Uzbekistan', description: 'Country name' })
  @IsOptional()
  @IsString()
  readonly name;
}
