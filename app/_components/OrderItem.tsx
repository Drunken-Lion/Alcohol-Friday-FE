import React from 'react';
import { FaStar } from 'react-icons/fa';
import Portal from './Portal';
import { OrderItemProps } from 'app/_types/common';

export default function OrderItem({
  orderDetailId,
  title,
  price,
  quantity,
  score,
  image,
  isReview,
  isReviewComplete,
  reviewText,
  onClick,
}: OrderItemProps) {
  let clicked: boolean[] = [];
  if (isReviewComplete && score) {
    for (let i = 0; i < score; i++) {
      clicked[i] = true;
    }
  }
  const starArray = [0, 1, 2, 3, 4];

  const formattedPrice: string = price.toLocaleString('ko-KR');

  return (
    <div>
      <div className="flex flex-row gap-5">
        <div className="flex justify-center items-center w-28 h-40 bg-white rounded-lg border border-slate-700 border-opacity-20">
          <img src={image} />
        </div>
        <div className="flex flex-col">
          <div className="flex text-zinc-800 text-base font-bold">
            <span>{title}</span>
            {isReviewComplete && (
              <div className="flex flex-row pl-2">
                {starArray.map((el) => {
                  const starStyles = clicked[el] ? 'text-blue-950' : 'text-slate-300';
                  return <FaStar fontSize={20} key={el} id={`${el}`} className={starStyles} />;
                })}
              </div>
            )}
          </div>
          <div className="text-stone-500 text-sm font-normal">
            <span>{formattedPrice}</span>
            <span className="px-1">/</span>
            <span>수량 {quantity}개</span>
          </div>
          {isReview && (
            <div>
              {isReviewComplete ? (
                <div className="pt-3">
                  <span className="text-[#333333] text-base font-normal font-['Pretendard']">
                    {reviewText}
                  </span>
                  <Portal
                    orderDetailId={orderDetailId}
                    portalName="리뷰수정"
                    className="flex justify-center mt-10 py-2 text-blue-900 text-sm font-normal w-48 bg-white rounded-lg border border-blue-900 cursor-grabbing"
                  />
                </div>
              ) : (
                <Portal
                  orderDetailId={orderDetailId}
                  portalName="리뷰쓰기"
                  className="flex justify-center mt-[76px] py-2 text-blue-900 text-sm font-normal w-48 bg-white rounded-lg border border-blue-900 cursor-grabbing"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
