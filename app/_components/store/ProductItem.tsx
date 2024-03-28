import React, { useEffect, useState } from 'react';
import ReviewRating from '../ReviewRating';
import Star from '/public/images/star.svg';
import { ProductItemProps } from 'app/_types/store';

export default function ProductItem({
  image,
  name,
  category,
  price,
  reviewPoint,
  reviewCount,
  detailCheck,
}: ProductItemProps) {
  const [clicked, setClicked] = useState<boolean[]>([]);

  const formattedPrice: string = price.toLocaleString('ko-KR');

  useEffect(() => {
    const newClicked = Array(5).fill(false);
    newClicked.fill(true, 0, reviewPoint);
    setClicked(newClicked);
  }, [reviewPoint]);

  return (
    <div className={`flex ${detailCheck ? 'flex-row' : 'flex-col'} w-full gap-5`}>
      <div className="flex justify-center rounded-lg border border-slate-700 border-opacity-20 py-4">
        <img src={image} className="object-contain w-[195px] h-[311px]" />
      </div>
      {detailCheck ? (
        <div>
          <p className="text-stone-500 text-2xl font-bold pb-5">{name}</p>
          <p className="text-neutral-400 text-xl font-bold pb-2">{category}</p>
          <div className="flex pb-16 gap-1">
            <ReviewRating clicked={clicked} onStarClick={undefined} isShow={true} />
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
              {reviewPoint}({reviewCount})
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
