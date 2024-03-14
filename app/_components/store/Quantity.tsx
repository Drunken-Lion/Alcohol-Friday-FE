'use client';
import React, { useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import Button from '../Button';

interface QuantityProps {
  quantity: number;
  price: string;
}

export default function Quantity({ quantity, price }: QuantityProps) {
  const [newQuantity, setNewQuantity] = useState<number>(quantity);

  const handleMinus = () => {
    if (newQuantity < 2) return;
    setNewQuantity(newQuantity - 1);
  };
  const handlePlus = () => {
    setNewQuantity(newQuantity + 1);
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
          {price}원
        </div>
      </div>
      <Button
        buttonName="구매하기"
        className="px-14 py-2.5 bg-slate-700 rounded justify-center items-center inline-flex text-center text-white text-base font-normal"
        onClick={undefined}
      />
    </div>
  );
}
