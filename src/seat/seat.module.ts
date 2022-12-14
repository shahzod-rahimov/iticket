import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeatController } from './seat.controller';
import { Seat } from './seat.model';
import { SeatService } from './seat.service';

@Module({
  imports: [SequelizeModule.forFeature([Seat])],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
