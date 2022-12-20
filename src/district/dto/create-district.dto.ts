import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateDistrictDto {
  @ApiProperty({ example: '1', description: 'Region id' })
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({ example: 'Olmozor', description: 'District name' })
  @IsString()
  readonly name: string;
}
