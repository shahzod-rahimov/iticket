import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerAddress } from './customer-address.model';
import { CustomerAddressController } from './customer_address.controller';
import { CustomerAddressService } from './customer_address.service';

@Module({
  imports: [SequelizeModule.forFeature([CustomerAddress])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
