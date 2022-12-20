import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTicketTypeDto {
  @ApiProperty({ example: 'vip', description: 'Ticket type name' })
  @IsOptional()
  @IsString()
  readonly ticket_type: string;
}
