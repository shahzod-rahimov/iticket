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
import { Booking } from './booking/booking.model';
import { Admin } from './admin/admin.model';
import { Cart } from './cart/cart.model';
import { Customer } from './customer/customer.model';
import { CustomerAddress } from './customer_address/customer-address.model';
import { CustomerCard } from './customer_card/customer_card.model';
import { Event } from './event/event.model';
import { EventType } from './event_type/event_type.model';
import { HumanCategory } from './human_category/human_category.model';
import { Seat } from './seat/seat.model';
import { SeatType } from './seat_type/seat_type.model';
import { Ticket } from './ticket/ticket.model';
import { Venue } from './venue/venue.model';
import { VenuePhotos } from './venue_photo/venue_photo.model';
import { VenueType } from './venue_type/venue_type.model';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { StatusModule } from './status/status.module';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { LanguagesModule } from './languages/languages.module';
import { PaymentMethod } from './payment_method/payment_method.model';
import { DeliveryMethod } from './delivery_method/delivery_method.model';
import { DiscountCoupon } from './discount_coupon/discount_coupon.model';
import { Status } from './status/status.model';
import { TicketType } from './ticket_type/ticket_type.model';
import { Language } from './languages/languages.model';
import { CountriesModule } from './countries/countries.module';
import { RegionModule } from './region/region.module';
import { RegionController } from './region/region.controller';
import { RegionService } from './region/region.service';
import { DistrictModule } from './district/district.module';
import { GenderModule } from './gender/gender.module';

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
      models: [
        Booking,
        Admin,
        Cart,
        Customer,
        CustomerAddress,
        CustomerCard,
        Event,
        EventType,
        HumanCategory,
        Seat,
        SeatType,
        Ticket,
        Venue,
        VenuePhotos,
        VenueType,
        PaymentMethod,
        DeliveryMethod,
        DiscountCoupon,
        Status,
        TicketType,
        Language,
      ],
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
    PaymentMethodModule,
    DeliveryMethodModule,
    DiscountCouponModule,
    StatusModule,
    TicketTypeModule,
    LanguagesModule,
    CountriesModule,
    RegionModule,
    DistrictModule,
    GenderModule,
  ],
  controllers: [RegionController],
  providers: [RegionService],
})
export class AppModule {}
