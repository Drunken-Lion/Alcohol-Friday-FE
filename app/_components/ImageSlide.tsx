'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const photos: string[] = [
  '/images/alcohol1.png',
  '/images/alcohol2.png',
  '/images/alcohol3.png',
  '/images/alcohol4.png',
  '/images/alcohol5.png',
  '/images/alcohol1.png',
  '/images/alcohol2.png',
  '/images/alcohol3.png',
  '/images/alcohol4.png',
  '/images/alcohol5.png',
];

export default function ImageSlide() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      spaceBetween={30}
      slidesPerView={2.5}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        1024: {
          slidesPerView: 5,
        },
      }}
      className="mt-20"
    >
      {photos.map((p, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={p} alt="" className="rounded-2xl" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
