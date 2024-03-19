import React from 'react';
import Button from '../Button';
import Portal from '../Portal';

interface OrderItemProps {
  storeName?: string;
  title?: string;
  subTitle?: string;
  price?: string;
  quantity?: number;
  image?: string;
  isReview?: Boolean;
  isReviewComplete?: Boolean;
  reviewText?: string;
  onClick?: () => void;
}

export default function OrderItem({
  storeName,
  title,
  subTitle,
  price,
  quantity,
  image,
  isReview,
  isReviewComplete,
  reviewText,
  onClick,
}: OrderItemProps) {
  console.log(reviewText);
  return (
    <div className="flex flex-row gap-5">
      <div className="flex justify-center items-center w-28 h-40 bg-white rounded-lg border border-slate-700 border-opacity-20">
        <img src={image} />
      </div>
      <div className="flex flex-col">
        <div className="flex text-zinc-800 text-base font-bold">
          {/* {isValue && <span>[{storeName}]</span>} */}
          <span>{title}</span>
        </div>
        <span className="text-zinc-800 text-sm font-normal mb-5">{subTitle}</span>
        {isReview && (
          <div>
            <div className="text-stone-500 text-sm font-normal pb-10">
              <span>{price}</span>
              <span className="px-1">/</span>
              <span>수량 {quantity}개</span>
            </div>
            {isReviewComplete && (
              <>
                <span className="text-[#333333] text-base font-normal font-['Pretendard']">
                  {reviewText}
                </span>
              </>
            )}
            <Portal
              portalName="리뷰쓰기"
              className="flex justify-center py-2 text-blue-900 text-sm font-normal w-48 bg-white rounded-lg border border-blue-900 cursor-grabbing"
            />
          </div>
        )}
      </div>
    </div>
  );
}
