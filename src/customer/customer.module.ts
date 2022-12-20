import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Module({
  imports: [SequelizeModule.forFeature([Customer]), JwtModule.register({})],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
