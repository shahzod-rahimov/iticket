import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RegionController } from './region.controller';
import { Region } from './region.model';
import { RegionService } from './region.service';

@Module({
  imports: [SequelizeModule.forFeature([Region])],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
