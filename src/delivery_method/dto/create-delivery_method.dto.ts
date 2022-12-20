import { IsString } from 'class-validator';

export class CreateDeliveryMethodDto {
  @IsString()
  readonly method_name: string;
}
