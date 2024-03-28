import React, { useEffect } from 'react';
import { MarkerProps } from 'app/_types/map';

export default function Marker({
  id,
  map,
  latitude,
  longitude,
  name,
  category,
  businessStatus,
  address,
  image,
}: MarkerProps) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(latitude, longitude),
        icon: {
          content: [
            `<div style="display: flex; flex-direction: row; width: 100%; border: 1px solid black; border-radius: 30px; background-color: white; padding: 6px;">
            <img src="/images/lion.png" style="width: 45px; height: 45px; border: 1px solid black; border-radius: 50px;"/>
            <div style="display: flex; flex-direction: column; padding-left: 8px; text-size: 8px;">
            <div style="color: #333333; font-size: 20px; font-weight: 700; word-wrap: break-word">${name}</div>
            <div style="color: #999999; font-size: 14px; font-weight: 400; word-wrap: break-word">${category}</div>
            </div>
          </div>`,
          ].join(''),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });

      const contentString = [
        `<div class="iw_inner" style="padding: 20px">
             <a href="/restaurant/${id}" style="color: #333333; font-size: 20px; font-weight: 700; word-wrap: break-word">${name}</a>
             <span style="color: #354D8B; font-size: 14px; font-weight: 400; word-wrap: break-word">${businessStatus}</span>
             <p style="color: #999999; font-size: 14px; font-weight: 400; word-wrap: break-word">${category}</p>
             <p>${address}</p>
             <div style="display: flex; justify-content: center; border-radius: 10px; border: 1px rgba(56.18, 70.02, 95.62, 0.15) solid; padding: 20px">
             <img src=${image[0].files.file[0].path} width="55" height="55" /><br /> 
             </div>   
          </div>`,
      ].join('');

      const infowindow = new naver.maps.InfoWindow({
        content: contentString,
      });

      naver.maps.Event.addListener(marker, 'click', function (e) {
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          marker && infowindow.open(map, marker);
        }
      });
    }

    return () => {
      map && marker?.setMap(map);
    };
  }, [map]);

  return <></>;
}
