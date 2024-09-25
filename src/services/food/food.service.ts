import { HttpService } from '../http/http.service';
import type { FoodResponseDto } from './dtos/food-response.dto';
import type { FoodSearchParams } from './dtos/food-search-params.dto';
import type { FoodSearchResponseDto } from './dtos/food-serach-response.dto';
import type { RestaurantResponseDto } from './dtos/restaurant-response.dto';
import type { RestaurantSearchResponseDto } from './dtos/restaurant-search-response.dto';

export class FoodService {
  public static async getFoodSearch(
    params: FoodSearchParams,
  ): Promise<FoodSearchResponseDto> {
    const temp = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      temp.set(key, value);
    });

    const response = await HttpService.get<FoodSearchResponseDto>(
      '/foods/search/food?' + temp.toString(),
    );
    return response.data;
  }

  public static async getRestaurantSearch(
    params: FoodSearchParams,
  ): Promise<RestaurantSearchResponseDto> {
    const temp = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      temp.set(key, value);
    });
    const response = await HttpService.get<RestaurantSearchResponseDto>(
      '/foods/search/restaurant' + temp.toString(),
    );
    return response.data;
  }

  public static async getFood(id: string): Promise<FoodResponseDto> {
    const response = await HttpService.get<FoodResponseDto>(
      '/foods/food/' + id,
    );
    return response.data;
  }

  public static async getRestaurant(
    id: string,
  ): Promise<RestaurantResponseDto> {
    const response = await HttpService.get<RestaurantResponseDto>(
      '/foods/restaurant/' + id,
    );
    return response.data;
  }
}
