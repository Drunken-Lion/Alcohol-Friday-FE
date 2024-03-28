import Button from 'app/_components/Button';
import OrderProduct from 'app/_components/store/OrderProduct';
import React from 'react';

export default function Orders() {
  return (
    <div className="mx-36 mt-16 h-full">
      <p className="text-center text-black text-[40px] font-normal mb-20">주문/결제</p>
      <OrderProduct />
      <div className="flex justify-center my-10">
        <Button
          buttonName="6,002,500원 결제하기"
          className="w-1/2 bg-slate-700 rounded-[5px] text-center text-white text-xl font-bold py-2.5 px-[60px]"
        />
      </div>
    </div>
  );
}
