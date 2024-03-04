import Navigation from 'app/_components/mypage/Navigation';
import OrderStatus from 'app/_components/mypage/OrderStatus';
import React from 'react';

export default function mypage() {
  return (
    <div className="h-screen w-screen">
      <Navigation nickname="nickname" onClick={undefined} />
      <OrderStatus count={20} />
    </div>
  );
}
