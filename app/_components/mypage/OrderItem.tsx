import React from 'react';

interface OrderItemProps {
  storeName: string;
  title: string;
  subTitle: string;
  price: string;
  quantity: number;
  image: string;
}

export default function OrderItem({
  storeName,
  title,
  subTitle,
  price,
  quantity,
  image,
}: OrderItemProps) {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex justify-center items-center w-28 h-40 bg-white rounded-lg border border-slate-700 border-opacity-20">
        <img src={image} />
      </div>
      <div className="flex flex-col">
        <div className="text-zinc-800 text-base font-bold">
          <span>[{storeName}]</span>
          <span>{title}</span>
        </div>
        <span className="text-zinc-800 text-sm font-normal mb-5">{subTitle}</span>
        <div className="text-stone-500 text-sm font-normal">
          <span>{price}</span>
          <span className="px-1">/</span>
          <span>수량 {quantity}개</span>
        </div>
      </div>
    </div>
  );
}
