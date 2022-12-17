import { IsOptional, IsString } from 'class-validator';

export class UpdateTicketTypeDto {
  @IsOptional()
  @IsString()
  readonly ticket_type;
}
