import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDistrictDto {
  @ApiProperty({ example: '1', description: 'Region id' })
  @IsOptional()
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({ example: 'Olmozor', description: 'District name' })
  @IsOptional()
  @IsString()
  readonly name: string;
}
