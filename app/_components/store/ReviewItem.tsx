import React, { useEffect, useState } from 'react';
import { formatDate } from 'app/_utils/formatData';
import ReviewRating from '../ReviewRating';
import { ReviewItemProps } from 'app/_types/store';

export default function ReviewItem({
  nickname,
  reviewPoint,
  orderDate,
  reviewContent,
  image,
}: ReviewItemProps) {
  const [clicked, setClicked] = useState<boolean[]>([]);

  useEffect(() => {
    const newClicked = Array(5).fill(false);
    newClicked.fill(true, 0, reviewPoint);
    setClicked(newClicked);
  }, [reviewPoint]);

  const formattedOrderDate = formatDate(orderDate);

  return (
    <div>
      <div className="flex justify-between bg-gray-200 px-7 py-4 rounded-sm">
        <span className="text-stone-500 text-base font-bold">{nickname}</span>
        <div className="flex">
          <ReviewRating clicked={clicked} onStarClick={undefined} isShow={true} />
          <span className="text-zinc-800 text-base font-bold pl-1 pr-8">{reviewPoint}</span>
          <span className="text-stone-500 text-base font-normal">
            주문일자 : {formattedOrderDate}
          </span>
        </div>
      </div>
      <div className="px-5">
        <p className="py-5">{reviewContent}</p>
        <img
          src={image}
          className="rounded-[10px] border border-slate-700 border-opacity-20 py-6 px-16 mb-14"
        />
      </div>
    </div>
  );
}
