'use client';

import Address from 'app/_components/mypage/Address';
import Member from 'app/_components/mypage/Member';
import Navigation from 'app/_components/mypage/Navigation';
import Order from 'app/_components/mypage/Order';
import OrderStatus from 'app/_components/mypage/OrderStatus';
import Question from 'app/_components/mypage/Question';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

export default function mypage() {
  const [selectedTab, setSelectedTab] = useState<string>('order');
  const { data: session } = useSession();

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="w-screen">
      <Navigation nickname={session?.user.nickname} onClick={handleTabClick} />
      {selectedTab === 'order' && <Order />}
      {selectedTab === 'review' && <OrderStatus count={20} />}
      {selectedTab === 'member' && <Member />}
      {selectedTab === 'address' && <Address />}
      {selectedTab === 'question' && <Question />}
    </div>
  );
}
