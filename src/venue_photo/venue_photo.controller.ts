import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { VenuePhotos } from './venue_photo.model';
import { VenuePhotoService } from './venue_photo.service';

@ApiTags('Venue photo')
@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotosService: VenuePhotoService) {}

  @ApiOperation({ summary: 'Create venue photo' })
  @ApiResponse({ status: 201, type: VenuePhotos })
  @Post()
  @UseInterceptors(FileInterceptor('url'))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() image: any,
  ) {
    return this.venuePhotosService.create(createVenuePhotoDto, image);
  }

  @ApiOperation({ summary: 'Get all venue photo' })
  @ApiResponse({ status: 201, type: [VenuePhotos] })
  @Get()
  async getAllPosts() {
    return this.venuePhotosService.getAll();
  }

  @ApiOperation({ summary: 'Get venue photo by id' })
  @ApiResponse({ status: 201, type: VenuePhotos })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.venuePhotosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Delete venue photo' })
  @ApiResponse({ status: 201, type: VenuePhotos })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.venuePhotosService.remove(+id);
  }
}
