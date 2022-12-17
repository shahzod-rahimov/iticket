import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEventTypeDto {
  @IsOptional()
  @IsString()
  readonly name;

  @IsOptional()
  @IsNumber()
  readonly parent_event_type_id;
}
