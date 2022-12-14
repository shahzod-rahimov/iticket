import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DistrictController } from './district.controller';
import { District } from './district.model';
import { DistrictService } from './district.service';

@Module({
  imports: [SequelizeModule.forFeature([District])],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule {}
