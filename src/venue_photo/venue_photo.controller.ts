import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { VenuePhotoService } from './venue_photo.service';

@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotosService: VenuePhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('url'))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() image: any,
  ) {
    return this.venuePhotosService.create(createVenuePhotoDto, image);
  }

  @Get()
  async getAllPosts() {
    return this.venuePhotosService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.venuePhotosService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.venuePhotosService.remove(+id);
  }
}
