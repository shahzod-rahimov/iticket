import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTicketTypeDto {
  @ApiProperty({ example: 'vip', description: 'Ticket type name' })
  @IsString()
  readonly ticket_type: string;
}
