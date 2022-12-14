import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './countries.model';

@Module({
  imports: [SequelizeModule.forFeature([Country])],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
