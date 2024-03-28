import React from 'react';
import useSWR from 'swr';
import Marker from './Marker';
import { MAP_KEY } from 'app/_hooks/useMap';
import { NaverMap } from 'app/_types/map';
import { RestaurantsResponseData } from 'app/_types/restaurant';

export default function Markers({ items }: { items: RestaurantsResponseData }) {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);

  return (
    <div>
      {items?.map((item) => {
        console.log(item);
        return (
          <Marker
            id={item.restaurantId}
            map={map}
            latitude={item.latitude}
            longitude={item.longitude}
            name={item.restaurantName}
            category={item.restaurantCategory}
            businessStatus={item.businessStatus}
            address={item.restaurantAddress}
            image={item.restaurantProducts}
          />
        );
      })}
    </div>
  );
}
