import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueController } from './venue.controller';
import { Venue } from './venue.model';
import { VenueService } from './venue.service';

@Module({
  imports: [SequelizeModule.forFeature([Venue])],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
