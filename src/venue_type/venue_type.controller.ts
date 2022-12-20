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
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './venue_type.model';
import { VenueTypeService } from './venue_type.service';

@ApiTags('Venue type')
@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: 'Create venue type' })
  @ApiResponse({ status: 201, type: VenueType })
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: 'Get all venue type' })
  @ApiResponse({ status: 201, type: [VenueType] })
  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get venue type by id' })
  @ApiResponse({ status: 201, type: VenueType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update venue type' })
  @ApiResponse({ status: 201, type: VenueType })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto,
  ) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @ApiOperation({ summary: 'Delete venue type' })
  @ApiResponse({ status: 201, type: VenueType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTypeService.remove(+id);
  }
}
