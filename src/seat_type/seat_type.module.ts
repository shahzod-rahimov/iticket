import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeatTypeController } from './seat_type.controller';
import { SeatType } from './seat_type.model';
import { SeatTypeService } from './seat_type.service';

@Module({
  imports: [SequelizeModule.forFeature([SeatType])],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
})
export class SeatTypeModule {}
