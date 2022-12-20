import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateHumanCategoryDto {
  @ApiProperty({ example: 'name', description: 'Human category name' })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '15', description: 'Start age' })
  @IsOptional()
  @IsNumber()
  readonly start_age: number;

  @ApiProperty({ example: '50', description: 'Finish age' })
  @IsOptional()
  @IsNumber()
  readonly finish_age: number;

  @ApiProperty({ example: '1', description: 'Gender id' })
  @IsOptional()
  @IsNumber()
  readonly gender: number;
}
