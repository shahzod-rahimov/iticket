import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber } from 'class-validator';

export class CreateCartDto {
  @ApiProperty({ example: '1', description: 'Ticket id' })
  @IsNumber()
  readonly ticket_id: number;

  @ApiProperty({ example: '2', description: 'Customer id' })
  @IsNumber()
  readonly customer_id: number;

  @ApiProperty({ example: '01-01-2022', description: 'Created date' })
  @IsDateString()
  readonly createdAt: Date;

  @ApiProperty({ example: '01-01-2022', description: 'Fineshed date' })
  @IsDateString()
  readonly fineshedAt: Date;

  @ApiProperty({ example: '3', description: 'Status id' })
  @IsNumber()
  readonly status_id: number;
}
