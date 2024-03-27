import React from 'react';
import OrderItem from '../OrderItem';

export default function OrderProduct() {
  return (
    <div className="border-[1.5px] border-gray-300 rounded-[5px] p-8">
      <div className="text-zinc-800 text-2xl font-bold mb-8">주문 상품</div>
      <div className="flex flex-col gap-5">
        <div className="border border-gray-300 rounded-[5px] p-8">
          <p className="text-red-500 text-base font-normal">주문상품정보 1건</p>
          <OrderItem
            itemId={1}
            title="어린꿀술"
            price={1000000}
            quantity={3}
            image="/images/alcohol.png"
            orderCheck={true}
            orderDetailId={0}
          />
        </div>
        <div className="flex justify-between border border-gray-300 rounded-[5px] px-7 py-4">
          <span className="text-neutral-400 text-xl font-bold">총 상품 금액</span>
          <span className=" text-zinc-800 text-xl font-bold">6,000,000원</span>
        </div>
        <div className="flex justify-between border border-gray-300 rounded-[5px] px-7 py-4">
          <span className="text-neutral-400 text-xl font-bold">배송비</span>
          <span className="text-zinc-800 text-xl font-bold">2,500원</span>
        </div>
        <div className="flex justify-between border border-gray-300 rounded-[5px] px-7 py-4">
          <span className="text-zinc-800 text-xl font-bold">총 결재 금액</span>
          <span className="text-blue-900 text-xl font-bold">6,002,500원</span>
        </div>
      </div>
    </div>
  );
}
