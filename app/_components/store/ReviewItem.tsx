import React from 'react';
import ReviewRating from '../mypage/ReviewRating';

interface ReviewItemProps {
  nickname: string;
  reviewPoint: string;
  orderDate: string;
  reviewContent: string;
  image: string;
}

export default function ReviewItem({
  nickname,
  reviewPoint,
  orderDate,
  reviewContent,
  image,
}: ReviewItemProps) {
  return (
    <div>
      <div className="flex justify-between bg-gray-200 px-7 py-4 rounded-sm">
        <span className="text-stone-500 text-base font-bold">{nickname}</span>
        <div className="flex">
          <ReviewRating
            clicked={[true, true, true, false, false]}
            onStarClick={undefined}
            isShow={true}
          />
          <span className="text-zinc-800 text-base font-bold pl-1 pr-8">{reviewPoint}</span>
          <span className="text-stone-500 text-base font-normal">주문일자 : {orderDate}</span>
        </div>
      </div>
      <p className="py-5">{reviewContent}</p>
      <img
        src={image}
        className="rounded-[10px] border border-slate-700 border-opacity-20 py-6 px-16 mb-14"
      />
    </div>
  );
}
