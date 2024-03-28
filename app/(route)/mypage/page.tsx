'use client';
import React, { useState } from 'react';
import Address from 'app/_components/mypage/Address';
import Members from 'app/_components/mypage/Member';
import Navigation from 'app/_components/mypage/Navigation';
import Order from 'app/_components/mypage/Order';
import OrderStatus from 'app/_components/mypage/OrderStatus';
import Question from 'app/_components/mypage/Question';
import { useSession } from 'next-auth/react';
import ReviewWriteList from 'app/_components/mypage/ReviewWriteList';
import TabButton from 'app/_components/TabButton';

export default function mypage() {
  const [selectedTab, setSelectedTab] = useState<string>('order');
  const { data: session } = useSession();

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="h-full my-20">
      <Navigation
        nickname={session?.user.nickname}
        onClick={handleTabClick}
        selectedTab={selectedTab}
      />
      {selectedTab === 'order' && <Order />}
      {selectedTab === 'review' && <ReviewWriteList />}
      {selectedTab === 'member' && <Members />}
      {selectedTab === 'address' && <Address />}
      {selectedTab === 'question' && <Question />}
    </div>
  );
}
