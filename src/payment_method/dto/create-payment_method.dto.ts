import { IsString } from 'class-validator';

export class CreatePaymentMethodDto {
  @IsString()
  readonly method_name: string;
}
