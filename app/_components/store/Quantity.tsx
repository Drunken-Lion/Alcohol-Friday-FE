'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import Button from '../Button';
import useCart from 'app/_hooks/useCart';
import useOrder from 'app/_hooks/useOrder';
import { useProductId } from 'app/_stores/cart';
import { QuantityProps } from 'app/_types/store';

export default function Quantity({ quantity, price }: QuantityProps) {
  const router = useRouter();
  const { productId } = useProductId();
  const { addCart } = useCart();
  const { addOrder } = useOrder();

  const [newQuantity, setNewQuantity] = useState<number>(quantity);
  const [newPrice, setNewPrice] = useState<number>(price);

  const formattedPrice: string = newPrice.toLocaleString('ko-KR');

  const handleMinus = () => {
    if (newQuantity < 2) return;
    setNewQuantity(newQuantity - 1);
    setNewPrice(newPrice - price);
  };

  const handlePlus = () => {
    setNewQuantity(newQuantity + 1);
    setNewPrice(price + newPrice);
  };

  const handleCartClick = () => {
    const product = { itemId: productId, quantity: newQuantity };
    addCart.mutate(product, {
      onSuccess: () => {
        window.alert('장바구니에 추가되었습니다.');
        router.push('/carts');
      },
    });
  };

  const handleOrderClick = () => {
    const products = [{ itemId: productId, quantity: newQuantity }];
    console.log(products);
    addOrder.mutate(products, {
      onSuccess: () => {
        router.push('/orders');
      },
    });
  };

  return (
    <div className="flex flex-col bg-white rounded-lg border border-slate-700 border-opacity-20 px-5 py-10">
      <p className="text-zinc-800 text-base font-bold pb-4">수량</p>
      <div className="flex border-gray-300 text-stone-500 text-base font-bold">
        <div
          className="flex items-center rounded-tl rounded-bl border px-6 py-3 cursor-grabbing"
          onClick={handleMinus}
        >
          <FiMinus />
        </div>
        <div className="flex items-center border-b border-t  text-center py-3 px-14 ">
          {newQuantity}
        </div>
        <div
          className="flex items-center rounded-tr rounded-br border px-6 py-3 cursor-grabbing"
          onClick={handlePlus}
        >
          <FiPlus />
        </div>
      </div>
      <div className="my-16">
        <p className="text-zinc-800 text-base font-bold pb-4">총 상품 가격</p>
        <div className="rounded border border-gray-300 text-center text-stone-500 text-base font-bold py-3">
          {formattedPrice}원
        </div>
      </div>
      <Button
        buttonName="장바구니"
        className="w-full px-14 py-2.5 bg-gray-100 rounded justify-center items-center inline-flex text-center text-zinc-800 text-base font-normal my-2"
        onClick={handleCartClick}
      />
      <Button
        buttonName="구매하기"
        className="w-full px-14 py-2.5 bg-slate-700 rounded justify-center items-center inline-flex text-center text-white text-base font-normal"
        onClick={handleOrderClick}
      />
    </div>
  );
}
