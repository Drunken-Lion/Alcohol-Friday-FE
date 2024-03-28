'use client';
import { useQuery } from '@tanstack/react-query';
import {
  getRestaurant,
  getRestaurantCheck,
  getRestaurantInfo,
  getRestaurantProduct,
} from 'app/_service/restaurant';

export default function useRestaurant() {
  const fetchRestaurants = (
    neLatitude: number,
    neLongitude: number,
    swLatitude: number,
    swLongitude: number,
  ) => {
    return getRestaurant({
      neLatitude: neLatitude,
      neLongitude: neLongitude,
      swLatitude: swLatitude,
      swLongitude: swLongitude,
    });
  };

  const fetchRestaurantInfo = (id: number) => {
    return getRestaurantInfo(id);
  };

  const fetchRestaurantProduct = (id: number, pageNum: number) => {
    return getRestaurantProduct({ id: id, page: pageNum });
  };

  const fetchRestaurantCheck = (latitude: number, longitude: number, itemId: number) => {
    return getRestaurantCheck({
      userLocationLatitude: latitude,
      userLocationLongitude: longitude,
      itemId: itemId,
    });
  };

  const restaurantLocation = (
    neLatitude: number,
    neLongitude: number,
    swLatitude: number,
    swLongitude: number,
  ) => {
    const {
      isLoading,
      isError,
      data: items,
    } = useQuery({
      queryKey: ['restaurants', neLatitude, neLongitude, swLatitude, swLongitude],
      queryFn: () => fetchRestaurants(neLatitude, neLongitude, swLatitude, swLongitude),
    });

    return { isLoading, isError, items };
  };

  const restaurantInfo = (id: number) => {
    const {
      isLoading,
      isError,
      data: items,
    } = useQuery({
      queryKey: ['info', id],
      queryFn: () => fetchRestaurantInfo(id),
    });

    return { isLoading, isError, items };
  };

  const restaurantProduct = (id: number, pageNum: number) => {
    const {
      isLoading,
      isError,
      data: items,
    } = useQuery({
      queryKey: ['items', id, pageNum],
      queryFn: () => fetchRestaurantProduct(id, pageNum),
    });

    return { isLoading, isError, items };
  };

  const restaurantCheck = (latitude: number, longitude: number, itemId: number) => {
    const {
      isLoading,
      isError,
      data: items,
    } = useQuery({
      queryKey: ['check', latitude, longitude, itemId],
      queryFn: () => fetchRestaurantCheck(latitude, longitude, itemId),
    });

    return { isLoading, isError, items };
  };

  return { restaurantLocation, restaurantInfo, restaurantProduct, restaurantCheck };
}
