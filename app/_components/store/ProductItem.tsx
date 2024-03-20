import React from 'react';
import Star from '/public/images/star.svg';
import ReviewRating from '../mypage/ReviewRating';

interface ProductItemProps {
  image: string;
  name: string;
  category: string;
  price: number;
  reviewPoint: number;
  reviewCount: number;
  detailCheck?: boolean;
}

export default function ProductItem({
  image,
  name,
  category,
  price,
  reviewPoint,
  reviewCount,
  detailCheck,
}: ProductItemProps) {
  const formattedPrice: string = price.toLocaleString('ko-KR');

  return (
    <div className={`flex ${detailCheck ? 'flex-row' : 'flex-col'} w-full gap-5`}>
      <img
        src={image}
        className="rounded-lg border border-slate-700 border-opacity-20 py-10 px-36"
      />
      {detailCheck ? (
        <div>
          <p className="text-stone-500 text-2xl font-bold pb-5">{name}</p>
          <p className="text-neutral-400 text-xl font-bold pb-2">{category}</p>
          <div className="flex pb-16 gap-1">
            <ReviewRating
              clicked={[true, true, true, false, false]}
              onStarClick={undefined}
              isShow={true}
            />
            <div className="text-neutral-400 text-xl font-normal">
              {reviewPoint}({reviewCount})
            </div>
          </div>
          <span className="text-zinc-800 text-3xl font-bold">{formattedPrice}원</span>
        </div>
      ) : (
        <div>
          <p className="text-zinc-800 text-xl font-normal">{name}</p>
          <p className="text-stone-500 text-base font-normal py-2">{category}</p>
          <span className="text-zinc-800 text-2xl font-bold">{formattedPrice}원</span>
          <div className="flex pt-2 gap-1">
            <Star />
            <div className="text-neutral-400 text-base font-normal">
              {reviewPoint} ({reviewCount})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
