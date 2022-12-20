import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { Status } from 'src/status/status.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart, Status])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
