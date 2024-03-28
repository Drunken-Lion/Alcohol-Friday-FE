export type NaverMap = naver.maps.Map;

type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (
    map: NaverMap,
    neLatitude: number,
    neLongitude: number,
    swLatitude: number,
    swLongitude: number,
  ) => void;
};

export interface MarkerProps {
  id: number;
  map: NaverMap | undefined;
  latitude: number;
  longitude: number;
  name: string;
  category: string;
  businessStatus: string;
  address: string;
  image: [
    {
      id: number;
      name: string;
      files: { file: [{ path: string }] };
    },
  ];
}
