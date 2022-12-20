import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateVenueDto {
  @ApiProperty({ example: 'qwerty', description: 'Venue name' })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'qwerty', description: 'Venue address' })
  @IsOptional()
  @IsString()
  readonly address: string;

  @ApiProperty({ example: 'location', description: 'Venue location' })
  @IsOptional()
  @IsString()
  readonly location: string;

  @ApiProperty({ example: 'https://smth.com', description: 'Venue site' })
  @IsOptional()
  @IsString()
  readonly site: string;

  @ApiProperty({ example: '+998991234567', description: 'Venue phone number' })
  @IsOptional()
  @IsPhoneNumber('UZ')
  readonly phone: string;

  @ApiProperty({ example: '1', description: 'Venue type id' })
  @IsOptional()
  @IsNumber()
  readonly venue_type_id: number;

  @ApiProperty({ example: 'qwerty', description: 'Schema' })
  @IsOptional()
  @IsString()
  readonly schema: string;

  @ApiProperty({ example: '2', description: 'Region id' })
  @IsOptional()
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({ example: '3', description: 'District id' })
  @IsOptional()
  @IsNumber()
  readonly district_id: number;
}
