import React from 'react';
import Star from '/public/images/star.svg';

interface ProductItemProps {
  image: string;
  name: string;
  category: string;
  price: string;
  discountRate: number;
  discountPrice: string;
  reviewPoint: number;
  reviewCount: number;
}

export default function ProductItem({
  image,
  name,
  category,
  price,
  discountRate,
  discountPrice,
  reviewPoint,
  reviewCount,
}: ProductItemProps) {
  return (
    <div className="flex flex-col gap-5">
      <img
        src={image}
        className="bg-white rounded-lg border border-slate-700 border-opacity-20 py-10 px-28"
      />
      <div>
        <p className="text-zinc-800 text-xl font-normal">{name}</p>
        <p className="text-stone-500 text-base font-normal py-2">{category}</p>
        <p className="text-gray-300 text-base font-normal line-through">{price}</p>
        <div className="flex gap-2">
          <span className="text-red-500 text-2xl font-bold">{discountRate}%</span>
          <span className="text-zinc-800 text-2xl font-bold">{discountPrice}</span>
        </div>
        <div className="flex pt-2 gap-1">
          <Star />
          <span className="text-neutral-400 text-base font-normal">
            {reviewPoint} ({reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
}
