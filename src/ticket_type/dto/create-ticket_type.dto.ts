import { IsString } from 'class-validator';

export class CreateTicketTypeDto {
  @IsString()
  readonly ticket_type: string;
}
