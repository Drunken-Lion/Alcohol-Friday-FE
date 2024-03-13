import React, { useState } from 'react';
import Button from '../Button';

export default function CategoryButton() {
  const [activeButton, setActiveButton] = useState<string>('전체');
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="mx-36 mt-16">
      <p className=" text-zinc-800 text-xl font-bold mb-5">카테고리 별 보기</p>
      <div className="flex gap-8 mb-10">
        <Button
          onClick={() => handleButtonClick('전체')}
          buttonName="전체"
          className={`${
            activeButton === '전체'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } rounded-3xl border text-center text-base font-bold py-3 px-16`}
        />
        <Button
          onClick={() => handleButtonClick('막걸리')}
          buttonName="막걸리"
          className={`${
            activeButton === '막걸리'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } rounded-3xl border text-center text-base font-bold py-3 px-16`}
        />
        <Button
          onClick={() => handleButtonClick('청주')}
          buttonName="청주"
          className={`${
            activeButton === '청주'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } rounded-3xl border text-center text-base font-bold py-3 px-16`}
        />
        <Button
          onClick={() => handleButtonClick('과실주')}
          buttonName="과실주"
          className={`${
            activeButton === '과실주'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } rounded-3xl border text-center text-base font-bold py-3 px-16`}
        />
        <Button
          onClick={() => handleButtonClick('증류수')}
          buttonName="증류수"
          className={`${
            activeButton === '증류수'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } rounded-3xl border text-center text-base font-bold py-3 px-16`}
        />
        <Button
          onClick={() => handleButtonClick('기타')}
          buttonName="기타"
          className={`${
            activeButton === '기타'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } rounded-3xl border text-center text-base font-bold py-3 px-16`}
        />
      </div>
    </div>
  );
}
