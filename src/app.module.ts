import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookingModule } from './booking/booking.module';
import { CartModule } from './cart/cart.module';
import { TicketModule } from './ticket/ticket.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { EventModule } from './event/event.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { EventTypeModule } from './event_type/event_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { VenueModule } from './venue/venue.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueTypeModule } from './venue_type/venue_type.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: false,
    }),
    BookingModule,
    CartModule,
    TicketModule,
    CustomerCardModule,
    CustomerModule,
    AdminModule,
    CustomerAddressModule,
    EventModule,
    SeatModule,
    SeatTypeModule,
    EventTypeModule,
    HumanCategoryModule,
    VenueModule,
    VenuePhotoModule,
    VenueTypeModule,
  ],
})
export class AppModule {}
