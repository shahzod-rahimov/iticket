import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeliveryMethod } from './delivery_method.model';
import { DeliveryMethodService } from './delivery_method.service';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';

@ApiTags('Delivery method')
@Controller('delivery-method')
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  @ApiOperation({ summary: 'Create delivery method' })
  @ApiResponse({ status: 201, type: DeliveryMethod })
  @Post()
  create(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodService.create(createDeliveryMethodDto);
  }

  @ApiOperation({ summary: 'Get all delivery method' })
  @ApiResponse({ status: 201, type: DeliveryMethod })
  @Get()
  findAll() {
    return this.deliveryMethodService.findAll();
  }

  @ApiOperation({ summary: 'Get delivery method by id' })
  @ApiResponse({ status: 201, type: DeliveryMethod })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryMethodService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update delivery method' })
  @ApiResponse({ status: 201, type: DeliveryMethod })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto,
  ) {
    return this.deliveryMethodService.update(+id, updateDeliveryMethodDto);
  }

  @ApiOperation({ summary: 'Delete delivery method' })
  @ApiResponse({ status: 201, type: DeliveryMethod })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryMethodService.remove(+id);
  }
}
