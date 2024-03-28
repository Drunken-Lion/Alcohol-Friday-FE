'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { Coordinates, MapProps, NaverMap } from 'app/_types/map';
import { INITIAL_ZOOM } from 'app/_hooks/useMap';

export default function Map({ mapId = 'map', initialZoom = INITIAL_ZOOM, onLoad }: MapProps) {
  const mapRef = useRef<NaverMap | null>(null);

  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number }>({
    latitude: 37.569343,
    longitude: 126.9914879818916,
  });

  const initializeMap = () => {
    if (window.naver && window.naver.maps) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
        zoom: initialZoom,
        minZoom: 9,
        scaleControl: false,
        mapDataControl: false,
        logoControlOptions: {
          position: window.naver.maps.Position.BOTTOM_LEFT,
        },
      };
      //새로운 네이버 맵 인스턴스 생성
      const map = new window.naver.maps.Map(mapId, mapOptions);
      mapRef.current = map;
      let mapBounds = map.getBounds();
      console.log(mapBounds);

      const neLatitude = mapBounds.getMax().y;
      const neLongitude = mapBounds.getMax().x;
      const swLatitude = mapBounds.getMin().y;
      const swLongitude = mapBounds.getMin().x;

      if (onLoad) {
        onLoad(map, neLatitude, neLongitude, swLatitude, swLongitude);
      }
      const rect = new naver.maps.Rectangle({
        strokeOpacity: 0,
        strokeWeight: 0,
        fillOpacity: 0.2,
        bounds: map.getBounds(),
        map: map,
      });

      naver.maps.Event.addListener(map, 'bounds_changed', function (bounds) {
        window.setTimeout(function () {
          rect.setBounds(bounds);

          const neLatitude = bounds.getMax().y;
          const neLongitude = bounds.getMax().x;
          const swLatitude = bounds.getMin().y;
          const swLongitude = bounds.getMin().x;

          if (onLoad) {
            onLoad(map, neLatitude, neLongitude, swLatitude, swLongitude);
          } else {
            console.error('네이버 지도 API가 로드되지 않았습니다.');
          }
        }, 500);
      });
    }
  };

  useEffect(() => {
    const success = (position: any) => {
      setMyLocation({
        // latitude: position.coords.latitude,
        // longitude: position.coords.longitude,
        latitude: 37.569343,
        longitude: 126.9914879818916,
      });
    };

    const error = () => {
      setMyLocation({ latitude: 37.569343, longitude: 126.9914879818916 });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    initializeMap();
  }, []);

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
      <div id={mapId} style={{ width: '100%', height: '100%' }} />
    </>
  );
}
