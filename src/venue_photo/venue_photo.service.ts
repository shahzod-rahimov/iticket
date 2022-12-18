import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { VenuePhotos } from './venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhotos) private venuePhotos: typeof VenuePhotos,
    private readonly fileService: FilesService,
  ) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto, url: any) {
    const fileName = await this.fileService.createFile(url);
    const post = await this.venuePhotos.create({
      ...createVenuePhotoDto,
      url: fileName,
    });
    return post;
  }

  async getAll() {
    return this.venuePhotos.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const photo = await this.venuePhotos.findOne({
      where: { id },
      include: { all: true },
    });
    if (!photo) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return photo;
  }

  async remove(id: number) {
    const photo = await this.venuePhotos.destroy({ where: { id } });

    if (!photo) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return 'Deleted';
  }
}
