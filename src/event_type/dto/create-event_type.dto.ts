import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateEventTypeDto {
  @ApiProperty({ example: 'nimadir', description: 'Event type name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '1', description: 'Parent event type id' })
  @IsNumber()
  readonly parent_event_type_id: number;
}
