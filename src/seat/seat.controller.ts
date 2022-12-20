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
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './seat.model';
import { SeatService } from './seat.service';

@ApiTags('Seat')
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: 'Create seat' })
  @ApiResponse({ status: 201, type: Seat })
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({ summary: 'Get all seat' })
  @ApiResponse({ status: 201, type: [Seat] })
  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({ summary: 'Get seat by id' })
  @ApiResponse({ status: 201, type: Seat })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update seat' })
  @ApiResponse({ status: 201, type: Seat })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @ApiOperation({ summary: 'Delate seat' })
  @ApiResponse({ status: 201, type: Seat })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
