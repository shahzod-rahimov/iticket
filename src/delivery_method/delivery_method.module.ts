import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeliveryMethodController } from './delivery_method.controller';
import { DeliveryMethod } from './delivery_method.model';
import { DeliveryMethodService } from './delivery_method.service';

@Module({
  imports: [SequelizeModule.forFeature([DeliveryMethod])],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService]
})
export class DeliveryMethodModule {}
