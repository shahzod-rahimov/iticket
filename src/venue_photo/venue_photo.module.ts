import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhotoController } from './venue_photo.controller';
import { VenuePhotos } from './venue_photo.model';
import { VenuePhotoService } from './venue_photo.service';

@Module({
  imports: [SequelizeModule.forFeature([VenuePhotos])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
