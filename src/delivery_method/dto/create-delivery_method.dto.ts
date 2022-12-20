import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDeliveryMethodDto {
  @ApiProperty({ example: 'car', description: 'Delivery card method' })
  @IsString()
  readonly method_name: string;
}
