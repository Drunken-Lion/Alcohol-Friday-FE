import React from 'react';
import Line from '/public/images/line.svg';
import Order from '/public/images/order.svg';
import Review from '/public/images/review.svg';
import Member from '/public/images/member.svg';
import Delivery from '/public/images/delivery.svg';
import Inquiry from '/public/images/inquiry.svg';

interface NavigationProps {
  onClick: (tabName: string) => void;
  nickname?: string;
  selectedTab: string;
}

export default function Navigation({ nickname, onClick, selectedTab }: NavigationProps) {
  return (
    <div className="m-auto bg-[#F1F3F6] w-9/12 flex flex-row justify-center items-center py-5 rounded-2xl">
      <div className="flex gap-0.5 items-center">
        <span className="text-zinc-800 text-xl font-bold font-['Pretendard']">{nickname}</span>
        <span className="text-stone-500 text-base font-normal font-['Pretendard'] pr-20">
          님 안녕하세요!
        </span>
      </div>
      <Line />
      <div className="flex gap-16 pl-20 items-center">
        <div
          className="flex flex-row gap-2.5 hover:cursor-grabbing items-center"
          onClick={() => onClick('order')}
        >
          <Order />
          <div
            className={`text-base font-bold ${
              selectedTab === 'order' ? 'text-red-500' : 'text-zinc-800'
            }`}
          >
            주문내역
          </div>
        </div>
        <div
          className="flex flex-row gap-2.5 hover:cursor-grabbing items-center"
          onClick={() => onClick('review')}
        >
          <Review />
          <div
            className={`text-base font-bold ${
              selectedTab === 'review' ? 'text-red-500' : 'text-zinc-800'
            }`}
          >
            리뷰내역
          </div>
        </div>
        <div
          className="flex flex-row gap-2.5 hover:cursor-grabbing items-center"
          onClick={() => onClick('member')}
        >
          <Member />
          <div
            className={`text-base font-bold ${
              selectedTab === 'member' ? 'text-red-500' : 'text-zinc-800'
            }`}
          >
            회원정보
          </div>
        </div>
        <div
          className="flex flex-row gap-2.5 hover:cursor-grabbing items-center"
          onClick={() => onClick('address')}
        >
          <Delivery />
          <div
            className={`text-base font-bold ${
              selectedTab === 'address' ? 'text-red-500' : 'text-zinc-800'
            }`}
          >
            배송지 관리
          </div>
        </div>
        <div
          className="flex flex-row gap-2.5 hover:cursor-grabbing items-center"
          onClick={() => onClick('question')}
        >
          <Inquiry />
          <div
            className={`text-base font-bold ${
              selectedTab === 'question' ? 'text-red-500' : 'text-zinc-800'
            }`}
          >
            문의내역
          </div>
        </div>
      </div>
    </div>
  );
}
