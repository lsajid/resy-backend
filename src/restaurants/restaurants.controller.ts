import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  findAll(): any {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(id);
  }

  @Post()
  create(@Body() body): any {
    return this.restaurantsService.create(body);
  }

  @Put(':id')
  update(@Body() body, @Param('id') id: string): any {
    return this.restaurantsService.update(body, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(id);
  }
}
