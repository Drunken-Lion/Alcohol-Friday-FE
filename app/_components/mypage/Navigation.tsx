import React from 'react';
import Line from '/public/images/line.svg';
import Order from '/public/images/order.svg';
import Review from '/public/images/review.svg';
import Member from '/public/images/member.svg';
import Delevery from '/public/images/delevery.svg';
import Inquiry from '/public/images/inquiry.svg';

interface NavigationProps {
  onClick?: () => void;
  nickname: string;
}

export default function Navigation({ nickname, onClick }: NavigationProps) {
  return (
    <div className="m-auto bg-[#F1F3F6] w-11/12 flex flex-row justify-center items-center py-5 rounded-2xl">
      <div className="flex gap-0.5 items-center">
        <span className="text-zinc-800 text-xl font-bold font-['Pretendard']">{nickname}</span>
        <span className="text-stone-500 text-base font-normal font-['Pretendard'] pr-20">
          님 안녕하세요!
        </span>
      </div>
      <Line />
      <div className="flex gap-16 pl-20">
        <div className="flex flex-row gap-2.5 hover:cursor-pointer" onClick={onClick}>
          <Order />
          <div className="text-red-500 text-base font-bold font-['Pretendard']">주문내역</div>
        </div>
        <div className="flex flex-row gap-2.5 hover:cursor-pointer" onClick={onClick}>
          <Review />
          <div className="text-zinc-800 text-base font-bold font-['Pretendard']">리뷰내역</div>
        </div>
        <div className="flex flex-row gap-2.5 hover:cursor-pointer" onClick={onClick}>
          <Member />
          <div className="text-zinc-800 text-base font-bold font-['Pretendard']">회원정보</div>
        </div>
        <div className="flex flex-row gap-2.5 hover:cursor-pointer" onClick={onClick}>
          <Delevery />
          <div className="text-zinc-800 text-base font-bold font-['Pretendard']">배송지 관리</div>
        </div>
        <div className="flex flex-row gap-2.5 hover:cursor-pointer" onClick={onClick}>
          <Inquiry />
          <div className=" text-zinc-800 text-base font-bold font-['Pretendard'] hover:cursor-pointer">
            문의내역
          </div>
        </div>
      </div>
    </div>
  );
}
