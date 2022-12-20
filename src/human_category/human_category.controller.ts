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
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './human_category.model';
import { HumanCategoryService } from './human_category.service';

@ApiTags('Human category')
@Controller('human-category')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: 'Create human category' })
  @ApiResponse({ status: 201, type: HumanCategory })
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({ summary: 'Get all human category' })
  @ApiResponse({ status: 201, type: [HumanCategory] })
  @Get()
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({ summary: 'Get human category by id' })
  @ApiResponse({ status: 201, type: HumanCategory })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update human category' })
  @ApiResponse({ status: 201, type: HumanCategory })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto,
  ) {
    return this.humanCategoryService.update(+id, updateHumanCategoryDto);
  }

  @ApiOperation({ summary: 'Delete human category' })
  @ApiResponse({ status: 201, type: HumanCategory })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humanCategoryService.remove(+id);
  }
}
