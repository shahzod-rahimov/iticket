import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePaymentMethodDto {
  @ApiProperty({ example: 'cash', description: 'Payment method name' })
  @IsOptional()
  @IsString()
  readonly method_name: string;
}
