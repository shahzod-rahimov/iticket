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
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './gender.model';
import { GenderService } from './gender.service';

@ApiTags('Gender')
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @ApiOperation({ summary: 'Create gender' })
  @ApiResponse({ status: 201, type: Gender })
  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @ApiOperation({ summary: 'Get all gender' })
  @ApiResponse({ status: 201, type: [Gender] })
  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @ApiOperation({ summary: 'Get gender by id' })
  @ApiResponse({ status: 201, type: Gender })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update gender' })
  @ApiResponse({ status: 201, type: Gender })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(+id, updateGenderDto);
  }

  @ApiOperation({ summary: 'Delete gender' })
  @ApiResponse({ status: 201, type: Gender })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genderService.remove(+id);
  }
}
