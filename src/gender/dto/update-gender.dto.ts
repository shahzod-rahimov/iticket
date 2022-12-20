import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateGenderDto {
  @ApiProperty({ example: 'male/female', description: 'Gender value' })
  @IsOptional()
  @IsString()
  readonly value: string;
}
