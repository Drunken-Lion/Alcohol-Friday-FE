'use client';

import React, { useState } from 'react';
import Map from 'app/_components/Map';
import Markers from 'app/_components/Markers';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import useMap from 'app/_hooks/useMap';
import useRestaurant from 'app/_hooks/useRestaurant';
import { NaverMap } from 'app/_types/map';

export default function restaurant() {
  const [neLat, setNeLat] = useState<number>(0);
  const [neLon, setNeLon] = useState<number>(0);
  const [swLat, setSwLat] = useState<number>(0);
  const [swLon, setSwLon] = useState<number>(0);

  const { initializeMap } = useMap();
  const { restaurantLocation } = useRestaurant();
  const { isLoading, isError, items } = restaurantLocation(neLat, neLon, swLat, swLon);

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    <NotFound />;
  }

  const onLoadMap = (
    map: NaverMap,
    neLatitude: number,
    neLongitude: number,
    swLatitude: number,
    swLongitude: number,
  ) => {
    initializeMap(map);
    setNeLat(neLatitude);
    setNeLon(neLongitude);
    setSwLat(swLatitude);
    setSwLon(swLongitude);
    // setNeLat(37.57259950461558);
    // setNeLon(126.97822045306594);
    // setSwLat(37.56578998005062);
    // setSwLon(126.99868700755292);
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Map onLoad={onLoadMap} />
      <Markers items={items} />
    </div>
  );
}
