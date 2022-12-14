import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCategoryController } from './human_category.controller';
import { HumanCategory } from './human_category.model';
import { HumanCategoryService } from './human_category.service';

@Module({
  imports: [SequelizeModule.forFeature([HumanCategory])],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
})
export class HumanCategoryModule {}
