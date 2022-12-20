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
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './ticket_type.model';
import { TicketTypeService } from './ticket_type.service';

@ApiTags('Ticket type')
@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @ApiOperation({ summary: 'Create ticket type' })
  @ApiResponse({ status: 201, type: TicketType })
  @Post()
  create(@Body() createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeService.create(createTicketTypeDto);
  }

  @ApiOperation({ summary: 'Get all ticket type' })
  @ApiResponse({ status: 201, type: [TicketType] })
  @Get()
  findAll() {
    return this.ticketTypeService.findAll();
  }

  @ApiOperation({ summary: 'Get ticket type by id' })
  @ApiResponse({ status: 201, type: TicketType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update ticket type' })
  @ApiResponse({ status: 201, type: TicketType })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketTypeDto: UpdateTicketTypeDto,
  ) {
    return this.ticketTypeService.update(+id, updateTicketTypeDto);
  }

  @ApiOperation({ summary: 'Delete ticket type' })
  @ApiResponse({ status: 201, type: TicketType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTypeService.remove(+id);
  }
}
