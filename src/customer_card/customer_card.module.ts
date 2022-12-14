import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerCardController } from './customer_card.controller';
import { CustomerCard } from './customer_card.model';
import { CustomerCardService } from './customer_card.service';

@Module({
  imports: [SequelizeModule.forFeature([CustomerCard])],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
})
export class CustomerCardModule {}
