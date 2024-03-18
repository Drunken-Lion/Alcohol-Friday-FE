import React, { useState } from 'react';
import SearchIcon from '/public/images/search.svg';
import Input from './Input';

export default function Search() {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(e.target.value);
    console.log(inputSearchValue);
  };

  return (
    <div className="relative mb-16">
      <Input
        type="text"
        name="search"
        value={inputSearchValue}
        onChange={handleChange}
        placeholder="술, 카테고리, 브랜드를 검색해 보세요!"
        className="w-full flex-grow bg-[#F1F3F6] rounded-[50px] px-7 py-3 text-stone-500"
      />
      <SearchIcon className="absolute top-[30%] right-8 transform-translate-y-1/2 cursor-grabbing" />
    </div>
  );
}
