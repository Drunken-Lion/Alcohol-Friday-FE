'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { Coordinates, NaverMap } from 'app/_types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from 'app/_hooks/useMap';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

export default function Map({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    if (window.naver && window.naver.maps) {
      console.log('네이버 지도 API 로딩 완료');
      console.log(initialCenter);
      console.log(initialZoom);

      const mapOptions = {
        center: new window.naver.maps.LatLng(...initialCenter),
        zoom: initialZoom,
        minZoom: 9,
        scaleControl: false,
        mapDataControl: false,
        logoControlOptions: {
          position: naver.maps.Position.BOTTOM_LEFT,
        },
      };
      //새로운 네이버 맵 인스턴스 생성
      const map = new window.naver.maps.Map(mapId, mapOptions);
      mapRef.current = map;
      let mapBounds = map.getBounds();
      console.log(mapBounds);

      if (onLoad) {
        onLoad(map);
      }
    } else {
      console.error('네이버 지도 API가 로드되지 않았습니다.');
    }
  };

  // useEffect(() => {
  //   initializeMap();
  // }, []);

  // 맵이 unmount되었을 때 맵 인스턴스 destory하기
  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: '500px', height: '500px' }} />
    </>
  );
}
