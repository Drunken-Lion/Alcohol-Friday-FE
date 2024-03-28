'use client';

import React, { useState } from 'react';
import Pagination from 'app/_components/Pagination';
import RestaurantInfo from 'app/_components/restaurant/RestaurantInfo';
import RestaurantItemList from 'app/_components/restaurant/RestaurantItemList';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import useRestaurant from 'app/_hooks/useRestaurant';

export default function RestaurantDetail({ params: { id } }: { params: { id: number } }) {
  const [pageNum, setPageNum] = useState<number>(1);

  const { restaurantProduct } = useRestaurant();
  const { isLoading, isError, items } = restaurantProduct(id, pageNum);
  const item = items?.data;

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    <NotFound />;
  }

  return (
    <div className="mx-36 my-20 h-full">
      <RestaurantInfo restaurantId={id} />
      <RestaurantItemList items={item} />
      <Pagination
        totalCount={items?.pageInfo.count}
        pageRangeDisplayed={10}
        page={pageNum}
        setPage={setPageNum}
      />
    </div>
  );
}
