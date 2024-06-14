import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  private data: Restaurant[] = [
    {
      id: 1,
      name: 'Patsy"s" Pizzeria',
      menu: ['pizza', 'chips'],
    },
    {
      id: 2,
      name: 'Patsy"s" Pizzeria',
      menu: ['pizza', 'chips'],
    },
  ];

  findAll() {
    return this.data;
  }

  findOne(id) {
    return this.data.find((el) => el.id === id);
  }

  create(body) {
    return this.data.push(body);
  }

  update(body, id) {
    return `id: ${id}, ${body}`;
  }

  remove(id) {
    const restaurantIndex = this.data.findIndex((el) => el.id === id);
    if (restaurantIndex >= 0) {
      this.data.splice(restaurantIndex, 1);
    }
  }
}
