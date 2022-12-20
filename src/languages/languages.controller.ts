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
import { CreateLanguagesDto } from './dto/create-languages.dto';
import { UpdateLanguagesDto } from './dto/update-languages.dto';
import { Language } from './languages.model';
import { LanguagesService } from './languages.service';

@ApiTags('Languages')
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @ApiOperation({ summary: 'Create language' })
  @ApiResponse({ status: 201, type: Language })
  @Post()
  create(@Body() createLanguagesDto: CreateLanguagesDto) {
    return this.languagesService.create(createLanguagesDto);
  }

  @ApiOperation({ summary: 'Get all language' })
  @ApiResponse({ status: 201, type: [Language] })
  @Get()
  findAll() {
    return this.languagesService.findAll();
  }

  @ApiOperation({ summary: 'Get language by id' })
  @ApiResponse({ status: 201, type: Language })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languagesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update language' })
  @ApiResponse({ status: 201, type: Language })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguagesDto: UpdateLanguagesDto,
  ) {
    return this.languagesService.update(+id, updateLanguagesDto);
  }

  @ApiOperation({ summary: 'Delete language' })
  @ApiResponse({ status: 201, type: Language })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languagesService.remove(+id);
  }
}
