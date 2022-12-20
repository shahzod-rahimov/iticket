import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePaymentMethodDto {
  @ApiProperty({ example: 'cash', description: 'Payment method name' })
  @IsString()
  readonly method_name: string;
}
