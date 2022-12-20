import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDeliveryMethodDto {
  @ApiProperty({ example: 'car', description: 'Delivery card method' })
  @IsOptional()
  @IsString()
  readonly method_name: string;
}
