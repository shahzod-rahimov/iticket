import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentMethodController } from './payment_method.controller';
import { PaymentMethod } from './payment_method.model';
import { PaymentMethodService } from './payment_method.service';

@Module({
  imports: [SequelizeModule.forFeature([PaymentMethod])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
