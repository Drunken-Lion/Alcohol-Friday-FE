import serverInstance from './axios-server';
import {
  RestaurantCheckRequestData,
  RestaurantProductRequestData,
  RestaurantsRequestData,
} from 'app/_types/restaurant';

export async function getRestaurant(params: RestaurantsRequestData) {
  const res = await serverInstance.get(
    `/v1/restaurants?neLatitude=${params.neLatitude}&neLongitude=${params.neLongitude}&swLatitude=${params.swLatitude}&swLongitude=${params.swLongitude}`,
  );
  if (res.status !== 200) {
    throw new Error(`Failed to fetch restaurant location: ${res.statusText}`);
  }

  return res.data;
}

export async function getRestaurantInfo(id: number) {
  const res = await serverInstance.get(`/v1/restaurants/${id}`);
  if (res.status !== 200) {
    throw new Error(`Failed to fetch restaurant info: ${res.statusText}`);
  }

  return res.data;
}

export async function getRestaurantProduct(params: RestaurantProductRequestData) {
  const res = await serverInstance.get(`/v1/restaurants/${params.id}/product?page=${params.page}`);
  if (res.status !== 200) {
    throw new Error(`Failed to fetch restaurant product: ${res.statusText}`);
  }

  return res.data;
}

export async function getRestaurantCheck(params: RestaurantCheckRequestData) {
  const res = await serverInstance.get(
    `/v1/restaurants/nearby?userLocationLatitude=${params.userLocationLatitude}&userLocationLongitude=${params.userLocationLongitude}&itemId=${params.itemId}`,
  );
  if (res.status !== 200) {
    throw new Error(`Failed to fetch restaurant check: ${res.statusText}`);
  }

  return res.data;
}
