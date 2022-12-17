import { IsOptional, IsString } from 'class-validator';

export class UpdateDeliveryMethodDto {
  @IsOptional()
  @IsString()
  readonly method_name;
}
