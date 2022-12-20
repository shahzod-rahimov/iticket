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
import { Country } from './countries.model';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @ApiOperation({ summary: 'Create new country' })
  @ApiResponse({ status: 201, type: Country })
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countriesService.create(createCountryDto);
  }

  @ApiOperation({ summary: 'Get all countries' })
  @ApiResponse({ status: 201, type: [Country] })
  @Get()
  findAll() {
    return this.countriesService.findAll();
  }

  @ApiOperation({ summary: 'Get country by id' })
  @ApiResponse({ status: 201, type: Country })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countriesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update country' })
  @ApiResponse({ status: 201, type: Country })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countriesService.update(+id, updateCountryDto);
  }

  @ApiOperation({ summary: 'Delete country' })
  @ApiResponse({ status: 201, type: Country })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countriesService.remove(+id);
  }
}
