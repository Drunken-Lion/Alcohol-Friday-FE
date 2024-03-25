'use client';

import React, { useMemo } from 'react';
import Portal from './Portal';
// import Checkbox from './Checkbox';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import useCart from 'app/_hooks/useCart';
import { OrderItemProps } from 'app/_types/cart';

export default function OrderItem({
  title,
  price,
  quantity,
  image,
  isValue,
  cartCheck,
  orderCheck,
  itemId,
}: OrderItemProps) {
  // const [checked, setChecked] = React.useState<boolean>(true);
  const { editCartQuantity, removeCartItem } = useCart();

  const formattedPrice: string = price.toLocaleString('ko-KR');
  const cartItemTotalPrice: string = useMemo(
    () => (price * quantity).toLocaleString('ko-KR'),
    [price, quantity],
  );

  const handleMinusClick = () => {
    if (quantity < 2) return;
    quantity = quantity ? quantity - 1 : quantity;
    const product = { itemId, quantity };
    editCartQuantity.mutate(product);
  };

  const handlePlusClick = () => {
    quantity = quantity ? quantity + 1 : quantity;
    console.log(quantity);
    const product = { itemId, quantity };
    editCartQuantity.mutate(product);
  };

  const handleDeleteCartItem = () => {
    removeCartItem.mutate(itemId);
  };

  return (
    <div className="flex flex-row gap-5">
      {/* {cartCheck && (
        <Checkbox
          isChecked={checked}
          className="w-[25px] h-[25px] flex rounded-1 border-2 border-gray-300"
          onChange={handleCheckboxChange}
        />
      )} */}
      <div className="flex justify-center items-center w-28 h-40 bg-white rounded-lg border border-slate-700 border-opacity-20">
        <img src={image} />
      </div>
      <div className={`flex flex-col ${cartCheck && 'w-full'}`}>
        <div className="flex text-zinc-800 text-base font-bold pb-2 justify-between">
          <span>{title}</span>
          {cartCheck && (
            <div onClick={handleDeleteCartItem}>
              <FaTrashAlt />
            </div>
          )}
        </div>
        {isValue && (
          <div>
            <div
              className={`text-stone-500 text-sm font-normal ${
                orderCheck ? 'pb-[85px]' : 'pb-[70px]'
              }`}
            >
              <span>{price}</span>
              <span className="px-1">/</span>
              <span>수량 {quantity}개</span>
            </div>

            {orderCheck ? (
              <div className="text-zinc-800 text-base font-bold">3,000,000</div>
            ) : (
              <Portal
                portalName="리뷰쓰기"
                className="flex justify-center py-2 text-blue-900 text-sm font-normal w-48 bg-white rounded-lg border border-blue-900 cursor-grabbing"
              />
            )}
          </div>
        )}
        {cartCheck && (
          <div>
            <div className="text-stone-500 text-sm font-normal pb-[85px]">
              <span>{formattedPrice}</span>
              <span className="px-1">/</span>
              <span>수량 {quantity}개</span>
            </div>
            <div className="flex text-stone-500 justify-between">
              <div className="flex mr-[460px] items-center">
                <div onClick={handleMinusClick}>
                  <FiMinus className="cursor-grabbing" />
                </div>
                <span className="text-center text-base font-bold px-6 align-middle">
                  {quantity}
                </span>
                <div onClick={handlePlusClick}>
                  <FiPlus className="cursor-grabbing" />
                </div>
              </div>
              <div className="text-zinc-800 text-xl font-bold">{cartItemTotalPrice}원</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
