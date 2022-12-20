import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateVenueDto {
  @ApiProperty({ example: 'qwerty', description: 'Venue name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'qwerty', description: 'Venue address' })
  @IsString()
  readonly address: string;

  @ApiProperty({ example: 'location', description: 'Venue location' })
  @IsString()
  readonly location: string;

  @ApiProperty({ example: 'https://smth.com', description: 'Venue site' })
  @IsString()
  readonly site: string;

  @ApiProperty({ example: '+998991234567', description: 'Venue phone number' })
  @IsPhoneNumber('UZ')
  readonly phone: string;

  @ApiProperty({ example: '1', description: 'Venue type id' })
  @IsNumber()
  readonly venue_type_id: number;

  @ApiProperty({ example: 'qwerty', description: 'Schema' })
  @IsString()
  readonly schema: string;

  @ApiProperty({ example: '2', description: 'Region id' })
  @IsNumber()
  readonly region_id: number;

  @ApiProperty({ example: '3', description: 'District id' })
  @IsNumber()
  readonly district_id: number;
}
