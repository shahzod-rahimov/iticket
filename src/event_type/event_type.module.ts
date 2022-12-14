import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventTypeController } from './event_type.controller';
import { EventType } from './event_type.model';
import { EventTypeService } from './event_type.service';

@Module({
  imports: [SequelizeModule.forFeature([EventType])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
