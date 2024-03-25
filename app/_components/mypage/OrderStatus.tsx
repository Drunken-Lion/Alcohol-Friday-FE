import React from 'react';

interface CountProps {
  count: number;
}

export default function OrderStatus({ count }: CountProps) {
  return (
    <div className="m-auto my-10 w-7/12 h-24 flex flex-row justify-center items-center py-6 gap-20 rounded-[10px] border-solid border border-[#D1D7DD]">
      <div className="flex flex-col">
        <div className="text-center text-blue-900 text-base font-bold font-['Pretendard']">
          {count}
        </div>
        <div className="text-center text-blue-900 text-base font-bold font-['Pretendard']">
          전체
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          2
        </div>
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          결제완료
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          8
        </div>
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          상품준비
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          8
        </div>
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          배송중
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          7
        </div>
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          배송완료
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          5
        </div>
        <div className="text-center text-neutral-400 text-base font-bold font-['Pretendard']">
          수령완료
        </div>
      </div>
    </div>
  );
}
