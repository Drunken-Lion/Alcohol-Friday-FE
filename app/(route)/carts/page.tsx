'use client';

import React from 'react';
// import Checkbox from 'app/_components/Checkbox';
import OrderItem from 'app/_components/OrderItem';
import CartBill from 'app/_components/store/CartBill';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import useCart from 'app/_hooks/useCart';
import { CartItem } from 'app/_types/cart';

export default function Carts() {
  const {
    cartList: { isLoading, data: items, isError },
  } = useCart();

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    <NotFound />;
  }

  let totalItemsPrice = 0;
  if (items?.cartDetailResponseList) {
    totalItemsPrice = items.cartDetailResponseList.reduce((acc: number, item: CartItem) => {
      return acc + item.item.price * item.quantity;
    }, 0);
  }
  const totalPrice = totalItemsPrice + 2500;
  totalItemsPrice.toLocaleString('ko-KR');
  totalPrice.toLocaleString('ko-KR');

  return (
    <div className="mx-36 my-20 h-full">
      <p className="text-center text-black text-[40px] font-normal mb-5">장바구니</p>
      {/* <div className="flex items-center mb-5 ml-5">
        <Checkbox className="w-[25px] h-[25px] flex rounded-1 border-2 border-gray-300 mr-2" />
        <span className="text-stone-500 text-base font-normal">모두선택</span>
        <span className="text-stone-500 text-base font-normal">
          (2/2)
        </span>
      </div> */}
      <div className="flex gap-16">
        <div className="w-full flex flex-col gap-5">
          {items?.cartDetailResponseList.map((item: CartItem) => (
            <OrderItem
              itemId={item.item.id}
              title={item.item.name}
              price={item.item.price}
              quantity={item.quantity}
              image={item.item?.file}
              cartCheck={true}
              orderDetailId={0}
            />
          ))}
        </div>
        <CartBill productPrice={totalItemsPrice} deliveryFee="2,500" totalPrice={totalPrice} />
      </div>
    </div>
  );
}
