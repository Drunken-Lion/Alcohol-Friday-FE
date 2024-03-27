import React, { useState } from 'react';
import Input from './Input';
import SearchIcon from '/public/images/search.svg';
import { useSearchStore } from 'app/_stores/store';

export default function Search() {
  const { setKeyword } = useSearchStore();
  const [inputSearchValue, setInputSearchValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(inputSearchValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative mb-16">
        <Input
          type="text"
          name="search"
          value={inputSearchValue}
          onChange={handleChange}
          placeholder="술, 카테고리, 브랜드를 검색해 보세요!"
          className="w-full flex-grow bg-[#F1F3F6] rounded-[50px] px-7 py-3 text-stone-500"
        />
        <button
          type="submit"
          className="absolute top-[30%] right-8 transform-translate-y-1/2 cursor-grabbing"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
