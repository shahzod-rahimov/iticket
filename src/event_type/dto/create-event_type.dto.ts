import { IsNumber, IsString } from 'class-validator';

export class CreateEventTypeDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly parent_event_type_id: number;
}
