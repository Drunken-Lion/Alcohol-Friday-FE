import React, { useState } from 'react';
import Button from '../Button';
import { useCategoriesStore } from 'app/_stores/store';

export default function CategoryButton() {
  const { setCategory } = useCategoriesStore();
  const [activeButton, setActiveButton] = useState<string>('');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setCategory(buttonName);
  };

  return (
    <div>
      <p className=" text-zinc-800 text-xl font-bold mb-5">카테고리 별 보기</p>
      <div className="flex gap-8 mb-10 justify-center">
        <Button
          onClick={() => handleButtonClick('')}
          buttonName="전체"
          className={`${
            activeButton === ''
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } w-full rounded-3xl border text-center text-base font-bold py-3 px-11`}
        />
        <Button
          onClick={() => handleButtonClick('탁주/막걸리')}
          buttonName="탁주/막걸리"
          className={`${
            activeButton === '탁주/막걸리'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } w-full rounded-3xl border text-center text-base font-bold py-3 px-11`}
        />
        <Button
          onClick={() => handleButtonClick('약주/청주')}
          buttonName="약주/청주"
          className={`${
            activeButton === '약주/청주'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } w-full rounded-3xl border text-center text-base font-bold py-3 px-11`}
        />
        <Button
          onClick={() => handleButtonClick('과실주/와인')}
          buttonName="과실주/와인"
          className={`${
            activeButton === '과실주/와인'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } w-full rounded-3xl border text-center text-base font-bold py-3 px-11`}
        />
        <Button
          onClick={() => handleButtonClick('증류수/소주/리큐르')}
          buttonName="증류수/소주/리큐르"
          className={`${
            activeButton === '증류수/소주/리큐르'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } w-full rounded-3xl border text-center text-base font-bold py-3 px-11`}
        />
        <Button
          onClick={() => handleButtonClick('기타주류')}
          buttonName="기타주류"
          className={`${
            activeButton === '기타주류'
              ? 'bg-blue-900 border-blue-900 text-white'
              : 'bg-white border-gray-300 text-neutral-400'
          } w-full rounded-3xl border text-center text-base font-bold py-3 px-11`}
        />
      </div>
    </div>
  );
}
