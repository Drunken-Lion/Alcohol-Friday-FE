import React from 'react';
import RestaurantItem from './RestaurantItem';
import { RestaurantProductProp } from 'app/_types/restaurant';

export default function RestaurantItemList({ items }: { items: RestaurantProductProp[] }) {
  return (
    <div className="mx-40 mt-10">
      <p className="text-black text-[22px] font-bold pb-6">취급주류</p>
      <p className="text-red-500 text-base font-normal pb-5">
        * 주류의 재고상황은 가게에 사정에 따라 달라질 수 있습니다.
      </p>
      <div className="grid grid-cols-2">
        {items?.map((item: RestaurantProductProp) => (
          <RestaurantItem
            id={item.id}
            alcohol={item.alcohol}
            name={item.name}
            files={item.files}
            stockStatus={item.stockStatus}
          />
        ))}
      </div>
    </div>
  );
}
