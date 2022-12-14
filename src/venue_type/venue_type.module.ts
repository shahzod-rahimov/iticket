import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueTypeController } from './venue_type.controller';
import { VenueType } from './venue_type.model';
import { VenueTypeService } from './venue_type.service';

@Module({
  imports: [SequelizeModule.forFeature([VenueType])],
  controllers: [VenueTypeController],
  providers: [VenueTypeService],
})
export class VenueTypeModule {}
