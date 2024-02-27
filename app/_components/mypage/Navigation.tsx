import React from 'react';
import Line from '/public/images/line.svg';
import Order from '/public/images/order.svg';
import Review from '/public/images/review.svg';
import Member from '/public/images/member.svg';
import Delevery from '/public/images/delevery.svg';
import Inquiry from '/public/images/inquiry.svg';

export default function Navigation() {
  return (
    <div className="bg-[#F1F3F6] w-11/12 flex flex-row justify-center items-center py-5 rounded-2xl">
      <div className="flex gap-0.5 items-center">
        <span className="text-zinc-800 text-xl font-bold font-['Pretendard']">닉네임 없어용</span>
        <span className="text-stone-500 text-base font-normal font-['Pretendard'] pr-20">
          님 안녕하세요!
        </span>
      </div>
      <Line />
      <div className="flex gap-16 pl-20">
        <div className="flex flex-row gap-2.5">
          <Order />
          <div className=" text-red-500 text-base font-bold font-['Pretendard']">주문내역</div>
        </div>
        <div className="flex flex-row gap-2.5">
          <Review />
          <div className=" text-zinc-800 text-base font-bold font-['Pretendard']">리뷰내역</div>
        </div>
        <div className="flex flex-row gap-2.5">
          <Member />
          <div className=" text-zinc-800 text-base font-bold font-['Pretendard']">회원정보</div>
        </div>
        <div className="flex flex-row gap-2.5">
          <Delevery />
          <div className=" text-zinc-800 text-base font-bold font-['Pretendard']">배송지 관리</div>
        </div>
        <div className="flex flex-row gap-2.5">
          <Inquiry />
          <div className=" text-zinc-800 text-base font-bold font-['Pretendard']">문의내역</div>
        </div>
      </div>
    </div>
  );
}
