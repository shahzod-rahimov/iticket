import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ example: '1', description: 'Country id' })
  @IsNumber()
  readonly country_id: number;

  @ApiProperty({ example: 'Toshkent', description: 'Region name' })
  @IsString()
  readonly name: string;
}
