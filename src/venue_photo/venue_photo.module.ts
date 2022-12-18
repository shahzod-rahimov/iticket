import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { VenuePhotoController } from './venue_photo.controller';
import { VenuePhotos } from './venue_photo.model';
import { VenuePhotoService } from './venue_photo.service';

@Module({
  imports: [SequelizeModule.forFeature([VenuePhotos]), FilesModule],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
