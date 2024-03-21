'use client';
import Checkbox from 'app/_components/Checkbox';
import OrderItem from 'app/_components/OrderItem';
import CartBill from 'app/_components/store/CartBill';
import useCart from 'app/_hooks/useCart';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import React from 'react';

type CartItem = {
  item: {
    name: string;
    price: number;
    file: string;
  };
  quantity: number;
};

export default function Carts() {
  let selectedCartItems = 1;
  const totalCartItems = 2;

  const {
    cartList: { isLoading, data: items, isError },
  } = useCart();

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    <NotFound />;
  }

  console.log(items);

  const productPrice = 6000000;
  const totalPrice = productPrice + 2500;

  return (
    <div className="mx-36 mt-20">
      <p className="text-center text-black text-[40px] font-normal">장바구니</p>
      <div className="flex items-center mb-5 ml-5">
        <Checkbox className="w-[25px] h-[25px] flex rounded-1 border-2 border-gray-300 mr-2" />
        <span className="text-stone-500 text-base font-normal">모두선택</span>
        <span className="text-stone-500 text-base font-normal">
          ({selectedCartItems}/{totalCartItems})
        </span>
      </div>
      <div className="flex gap-16">
        <div className="w-full flex border rounded-[10px] border-gray-200 p-5">
          <div className="flex flex-col gap-5">
            {items?.cartDetailResponseList.map((item: CartItem) => (
              <OrderItem
                title={item.item.name}
                price={item.item.price}
                quantity={item.quantity}
                image={item.item?.file}
                cartCheck={true}
              />
            ))}
          </div>
        </div>
        <CartBill productPrice={productPrice} deliveryFee="2,500" totalPrice={totalPrice} />
      </div>
    </div>
  );
}
