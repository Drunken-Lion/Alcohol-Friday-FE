import React from 'react';
import Button from '../Button';

interface CartBillProps {
  productPrice: string;
  deliveryFee: string;
  totalPrice: string;
}

export default function CartBill({ productPrice, deliveryFee, totalPrice }: CartBillProps) {
  return (
    <div>
      <div>
        <p className="pb-10 text-zinc-800 text-xl font-bold">계산서</p>
        <div className="flex justify-between border-t border-gray-300 pt-8 pb-5">
          <span className="text-neutral-400 text-base font-bold">총 상품 금액</span>
          <span className="text-zinc-800 text-base font-bold">{productPrice}원</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-8">
          <span className="text-neutral-400 text-base font-bold">배송비</span>
          <span className="text-zinc-800 text-base font-bold">{deliveryFee}원</span>
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <span className="text-zinc-800 text-base font-bold">총 금액</span>
        <span className="text-blue-900 text-xl font-bold">{totalPrice}원</span>
      </div>
      <p className="text-red-500 text-sm font-normal">
        * 제주도 및 도서산간의 경우 배송비가 추가될 수 있습니다.
      </p>
      <Button
        buttonName="구매하기"
        className="px-14 bg-slate-700 rounded-[5px] justify-center items-center text-center text-white text-base font-normal py-2.5 mt-12"
      />
    </div>
  );
}
