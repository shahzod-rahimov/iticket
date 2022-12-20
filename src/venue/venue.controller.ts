import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './venue.model';
import { VenueService } from './venue.service';

@ApiTags('Venue')
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: 'Create venue' })
  @ApiResponse({ status: 201, type: Venue })
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: 'Get all venue' })
  @ApiResponse({ status: 201, type: [Venue] })
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: 'Get venue by id' })
  @ApiResponse({ status: 201, type: Venue })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update venue' })
  @ApiResponse({ status: 201, type: Venue })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }

  @ApiOperation({ summary: 'Delete venue' })
  @ApiResponse({ status: 201, type: Venue })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
