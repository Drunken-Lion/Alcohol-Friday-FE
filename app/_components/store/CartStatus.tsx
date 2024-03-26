import React from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';
import useCart from 'app/_hooks/useCart';

export default function CartStatus() {
  const {
    cartList: { data: items },
  } = useCart();

  return (
    <div className="relative">
      <PiShoppingCartLight size={24} />
      {items && (
        <p className="absolute top-[-7px] left-3 w-4 h-4 bg-slate-700 rounded-full text-white text-xs font-normal text-center">
          {items?.cartDetailResponseList.length}
        </p>
      )}
    </div>
  );
}
