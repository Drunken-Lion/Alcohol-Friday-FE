import React from 'react';
import Button from '../Button';
import Portal from '../Portal';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

interface OrderItemProps {
  storeName: string;
  title: string;
  subTitle: string;
  price: string;
  quantity: number;
  image: string;
  isValue?: Boolean;
  onClick?: () => void;
  cartCheck?: Boolean;
}

export default function OrderItem({
  storeName,
  title,
  subTitle,
  price,
  quantity,
  image,
  isValue,
  onClick,
  cartCheck,
}: OrderItemProps) {
  console.log(cartCheck);
  return (
    <div className="flex flex-row gap-5">
      <div className="flex justify-center items-center w-28 h-40 bg-white rounded-lg border border-slate-700 border-opacity-20">
        <img src={image} />
      </div>
      <div className={`flex flex-col ${cartCheck && 'w-full'}`}>
        <div className="flex text-zinc-800 text-base font-bold">
          {isValue && <span>[{storeName}]</span>}
          <span>{title}</span>
        </div>
        <span className="text-zinc-800 text-sm font-normal mb-5">{subTitle}</span>
        {isValue && (
          <div>
            <div className="text-stone-500 text-sm font-normal pb-10">
              <span>{price}</span>
              <span className="px-1">/</span>
              <span>수량 {quantity}개</span>
            </div>
            {/* <Button
              className="flex justify-center py-2 text-blue-900 text-sm font-normal w-48 bg-white rounded-lg border border-blue-900"
              buttonName="리뷰쓰기"
              type={undefined}
              onClick={onClick}
            ></Button> */}
            <Portal
              portalName="리뷰쓰기"
              className="flex justify-center py-2 text-blue-900 text-sm font-normal w-48 bg-white rounded-lg border border-blue-900 cursor-grabbing"
            />
          </div>
        )}
        {cartCheck && (
          <div>
            <div className="text-stone-500 text-sm font-normal pb-10">
              <span>{price}</span>
              <span className="px-1">/</span>
              <span>수량 {quantity}개</span>
            </div>
            <div className="flex text-stone-500 justify-between">
              <div className="flex">
                <FiMinus className="cursor-grabbing" />
                <span className="text-center text-base font-bold px-6">{quantity}</span>
                <FiPlus className="cursor-grabbing" />
              </div>
              <div className="text-zinc-800 text-xl font-bold">3,000,000원</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
