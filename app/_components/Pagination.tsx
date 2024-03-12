'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';

interface PaginationProps {
  totalCount: number | 0;
  pageRangeDisplayed: number | 10;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  totalCount,
  pageRangeDisplayed,
  page,
  setPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageRangeDisplayed);
  const [pageGroup, setPageGroup] = useState<number>(Math.ceil(page / pageRangeDisplayed));
  let firstNum = pageGroup * pageRangeDisplayed - (pageRangeDisplayed - 1);
  let lastNum = pageGroup * pageRangeDisplayed;

  if (lastNum > totalPages) {
    lastNum = totalPages;
  }

  useEffect(() => {
    setPageGroup(Math.ceil(page / pageRangeDisplayed));
  }, [page, pageRangeDisplayed]);

  return (
    <div className="flex flex-row justify-center items-center py-[40px]">
      <Button
        className="w-[35px] h-[34px] bg-white rounded-[36px] border border-zinc-300 mr-7"
        buttonName="<"
        onClick={() => {
          if (page > 1) {
            setPage((prevPage) => {
              const page = prevPage - 1;
              setPageGroup(Math.ceil(page / pageRangeDisplayed));

              return page;
            });
          }
        }}
        disabled={page === 1 || totalPages === 0}
      />
      <div className="flex gap-3">
        <Button
          className="w-[35px] h-[35px] bg-slate-700 rounded-[36px] border border-slate-700 text-white text-xl font-normal font-['ABeeZee']"
          buttonName="1"
          onClick={() => setPage(firstNum)}
          active={page === firstNum}
        />
        {Array(pageRangeDisplayed - 1)
          .fill(null)
          .map((_, i) => {
            if (i >= lastNum - firstNum) {
              return null;
            }
            return (
              <Button
                className="w-[35px] h-[35px] bg-white rounded-[36px] border border-zinc-300 text-zinc-800 text-xl font-normal font-['ABeeZee']"
                buttonName={(firstNum + 1 + i).toString()}
                onClick={() => setPage(firstNum + 1 + i)}
                active={page === firstNum + 1 + i}
              />
            );
          })}
      </div>
      <Button
        className="w-[35px] h-[34px] bg-white rounded-[36px] border border-zinc-300 ml-7"
        buttonName=">"
        onClick={() => {
          if (page < totalPages) {
            setPage((prevPage) => {
              const page = prevPage + 1;
              setPageGroup(Math.ceil(page / pageRangeDisplayed));

              return page;
            });
          }
        }}
        disabled={page === totalPages || totalPages === 0}
      />
    </div>
  );
}
