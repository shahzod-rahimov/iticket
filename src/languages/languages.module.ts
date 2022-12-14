import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './languages.model';

@Module({
  imports: [SequelizeModule.forFeature([Language])],
  providers: [LanguagesService],
  controllers: [LanguagesController],
})
export class LanguagesModule {}
