import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';
import { Coordinates, NaverMap } from 'app/_types/map';

export const INITIAL_CENTER: Coordinates = [37.569343, 126.9914879818916];
export const INITIAL_ZOOM = 16;

export const MAP_KEY = '/map';

export default function useMap() {
  const { data: map } = useSWR(MAP_KEY);

  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  const resetMapOptions = useCallback(() => {
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  }, [map]);

  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  return {
    initializeMap,
    resetMapOptions,
    getMapOptions,
  };
}
