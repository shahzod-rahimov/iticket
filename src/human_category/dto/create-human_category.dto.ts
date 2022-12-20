import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateHumanCategoryDto {
  @ApiProperty({ example: 'name', description: 'Human category name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '15', description: 'Start age' })
  @IsNumber()
  readonly start_age: number;

  @ApiProperty({ example: '50', description: 'Finish age' })
  @IsNumber()
  readonly finish_age: number;

  @ApiProperty({ example: '1', description: 'Gender id' })
  @IsNumber()
  readonly gender: number;
}
