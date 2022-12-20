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
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './seat_type.model';
import { SeatTypeService } from './seat_type.service';

@ApiTags('Seat type')
@Controller('seat-type')
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({ summary: 'Create seat type' })
  @ApiResponse({ status: 201, type: SeatType })
  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @ApiOperation({ summary: 'Get all seat type' })
  @ApiResponse({ status: 201, type: [SeatType] })
  @Get()
  findAll() {
    return this.seatTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get seat type by id' })
  @ApiResponse({ status: 201, type: SeatType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update seat type' })
  @ApiResponse({ status: 201, type: SeatType })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto,
  ) {
    return this.seatTypeService.update(+id, updateSeatTypeDto);
  }

  @ApiOperation({ summary: 'Delete seat type' })
  @ApiResponse({ status: 201, type: SeatType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatTypeService.remove(+id);
  }
}
