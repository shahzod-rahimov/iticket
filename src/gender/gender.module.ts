import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenderController } from './gender.controller';
import { Gender } from './gender.model';
import { GenderService } from './gender.service';

@Module({
  imports: [SequelizeModule.forFeature([Gender])],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
