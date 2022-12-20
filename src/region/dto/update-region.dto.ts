import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRegionDto {
  @ApiProperty({ example: '1', description: 'Country id' })
  @IsOptional()
  @IsNumber()
  readonly country_id: number;

  @ApiProperty({ example: 'Toshkent', description: 'Region name' })
  @IsOptional()
  @IsString()
  readonly name: string;
}
