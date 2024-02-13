'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const photos = [
  'https://images.pexels.com/photos/7469387/pexels-photo-7469387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6213739/pexels-photo-6213739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      autoplay={{ delay: 3000 }}
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
