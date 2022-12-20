import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGenderDto {
  @ApiProperty({ example: 'male/female', description: 'Gender value' })
  @IsString()
  readonly value: string;
}
