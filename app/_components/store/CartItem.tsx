import React, { useMemo } from 'react';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
// import Checkbox from './Checkbox';
import useCart from 'app/_hooks/useCart';
import { CartItemProps } from 'app/_types/cart';

export default function CartItem({ itemId, title, price, quantity, image }: CartItemProps) {
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
      <div className="flex flex-col w-full">
        <div className="flex text-zinc-800 text-base font-bold pb-2 justify-between">
          <span>{title}</span>
          <div onClick={handleDeleteCartItem}>
            <FaTrashAlt />
          </div>
        </div>
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
              <span className="text-center text-base font-bold px-6 align-middle">{quantity}</span>
              <div onClick={handlePlusClick}>
                <FiPlus className="cursor-grabbing" />
              </div>
            </div>
            <div className="text-zinc-800 text-xl font-bold">{cartItemTotalPrice}원</div>
          </div>
        </div>
      </div>
    </div>
  );
}
