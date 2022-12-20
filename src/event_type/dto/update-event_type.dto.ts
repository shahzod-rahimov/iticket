import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEventTypeDto {
  @ApiProperty({ example: 'nimadir', description: 'Event type name' })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: '1', description: 'Parent event type id' })
  @IsOptional()
  @IsNumber()
  readonly parent_event_type_id: number;
}
