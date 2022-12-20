import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateCartDto {
  @ApiProperty({ example: '1', description: 'Ticket id' })
  @IsOptional()
  @IsNumber()
  readonly ticket_id: number;

  @ApiProperty({ example: '2', description: 'Customer id' })
  @IsOptional()
  @IsNumber()
  readonly customer_id: number;

  @ApiProperty({ example: '01-01-2022', description: 'Created date' })
  @IsOptional()
  @IsDateString()
  readonly createdAt: Date;

  @ApiProperty({ example: '01-01-2022', description: 'Fineshed date' })
  @IsOptional()
  @IsDateString()
  readonly fineshedAt: Date;

  @ApiProperty({ example: '3', description: 'Status id' })
  @IsOptional()
  @IsNumber()
  readonly status_id: number;
}
