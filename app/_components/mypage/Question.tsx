'use client';

import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import Button from '../Button';
import Pagination from '../Pagination';
import dayjs from 'dayjs';

const sample = {
  data: [
    {
      id: 0,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 1,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 2,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '접수',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 3,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '접수',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 4,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 5,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 6,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '접수',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 7,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 8,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '접수',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 9,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 10,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 11,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '답변완료',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
    {
      id: 12,
      title: '안녕하세요 상품에 대해서 문의드립니다.',
      questionStatus: '접수',
      createdAt: '2024-03-08T06:35:51.322Z',
    },
  ],
};

export default function Question() {
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [limitPerPage, setLimitPerpage] = useState<number>(10);
  const [checkedIds, setCheckedIds] = useState<Array<number>>([]);

  const handleClickCheckBox = (id: number) => {
    console.log('check id: ' + id);
    if (!checkedIds.some((checkedId) => checkedId === id)) {
      setCheckedIds([...checkedIds, id]);
    }
    console.log('checkedIds: ' + checkedIds);
  };

  const handleClickDelete = () => {
    console.log('게시글 삭제: ' + checkedIds);
  };

  const dateFormat = (date: string) => {
    return dayjs(date).format('YYYY-MM-DD');
  };

  return (
    <div className="m-auto w-9/12 py-7">
      <div className="mx-5">
        <div className="text-blue-900 text-xl font-normal font-['ABeeZee'] mb-8">탭 컴포넌트</div>
        <p className="text-neutral-400 text-base font-normal font-['ABeeZee'] mb-7">
          ※ 회원님이 작성하신 문의를 최신순으로 확인할 수 있습니다.
          <br />※ 답변완료 상태의 글은 삭제할 수 없습니다.
        </p>
        <table className="table-bordered w-full text-center">
          <thead>
            <tr>
              <th> </th>
              <th>등록일자</th>
              <th>제목</th>
              <th>답변여부</th>
            </tr>
          </thead>
          <tbody>
            {sample.data.map((item, i) => (
              <tr key={i}>
                <td>
                  {item.questionStatus === '접수' && (
                    <Checkbox
                      className="w-5 h-5 rounded bg-white border-solid border-[#38465f]"
                      onChange={() => handleClickCheckBox(item.id)}
                    />
                  )}
                </td>
                <td>{dateFormat(item.createdAt)}</td>
                <td>{item.title}</td>
                <td>{item.questionStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
          <Button
            buttonName="삭제"
            className="w-[175px] h-[50px] mt-7 bg-[#384660] rounded-[10px] font-normal font-['ABeeZee'] text-white text-base"
            onClick={handleClickDelete}
          />
        </div>
        <Pagination
          totalCount={5}
          pageRangeDisplayed={pageRangeDisplayed}
          page={1}
          setPage={setPageNum}
        />
      </div>
    </div>
  );
}
