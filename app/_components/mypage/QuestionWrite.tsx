import React from 'react';
import Textarea from '../Textarea';
import Button from '../Button';

export default function QuestionWrite() {
  return (
    <>
      <p className="text-neutral-400 text-base font-normal font-['ABeeZee'] mb-7 ml-5">
        ※ 문의유형 선택 후 문의내용을 자세히 작성해주세요.
        <br />※ 답변은 2~3일 소요될 수 있습니다.
      </p>
      <div className="w-full flex flex-col gap-9">
        <div className="flex flex-row gap-12 items-center">
          <div className="h-6 text-black text-[18px] font-normal font-['Pretendard']">문의유형</div>
          <select className="w-[220px] h-[50px] bg-white rounded-md border border-[rgba(56.18, 70.02, 95.62, 0.15)] border-solid pl-3">
            <option value="">문의유형</option>
            <option value="">상품 및 주문 문의</option>
            <option value="">레스토랑 문의</option>
            <option value="">시스템 문의</option>
            <option value="">기타 문의</option>
            <option value="">제휴 문의</option>
          </select>
        </div>
        <div className="flex flex-row gap-12 items-center">
          <div className="h-6 text-black text-[18px] font-normal font-['Pretendard']">문의제목</div>
          <input
            type="text"
            className="w-[1090px] h-[50px] bg-white rounded-md border border-[rgba(56.18, 70.02, 95.62, 0.15)] border-solid"
          />
        </div>
        <div className="flex flex-row gap-12">
          <div className="h-6 text-black text-[18px] font-normal font-['Pretendard']">문의내용</div>
          <Textarea
            label={''}
            id={''}
            rows={0}
            onChange={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
              throw new Error('Function not implemented.');
            }}
            placeholder=""
            className="w-[1090px] h-[350px] bg-white rounded-md border border-[rgba(56.18, 70.02, 95.62, 0.15)] border-solid"
          />
        </div>
        <div className="text-neutral-400 text-base font-normal font-['Pretendard']">
          ※ png, jpg 파일만 업로드 가능합니다.
        </div>
        <div className="flex flex-row gap-12 items-center">
          <div className="h-6 text-black text-[18px] font-normal font-['Pretendard']">이미지</div>
          <Button
            buttonName="첨부하기"
            className="w-[165px] h-[50px] bg-white rounded-[10px] border border-[#D1D7DD] border-solid text-[#333333] text-base text-['Pretendard'] font-normal ml-3"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <Button
          buttonName="취소"
          className="w-[175px] h-[50px] bg-gray-100 rounded-[10px] text-black text-base font-normal font-['ABeeZee']"
        />
        <Button
          buttonName="저장"
          className="w-[175px] h-[50px] bg-slate-700 rounded-[10px] text-white text-base font-normal font-['ABeeZee']"
        />
      </div>
    </>
  );
}
