'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Button from '../Button';
import Pagination from '../Pagination';
import dayjs from 'dayjs';
import clientInstance from 'app/_service/axios-client';
import TabButton from '../TabButton';
import QuestionWrite from './QuestionWrite';
import { dateFormat } from 'app/_utils/common';

type Question = {
  id: number;
  title: string;
  status: string;
  createdAt: string;
};

export default function Question() {
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [limitPerPage, setLimitPerpage] = useState<number>(10);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [tabName, setTabName] = useState('문의내역');
  const [pageType, setPageType] = useState('list');

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const getQuestions = async (page = 0, size = 10) => {
    const url = '/v1/members/me/questions';
    const res = await clientInstance.get(url, { params: { page, size } });

    return res.data;
  };

  const { isLoading, data: queryData } = useQuery({
    queryKey: ['get-questions', pageNum - 1],
    queryFn: () => getQuestions(pageNum - 1, limitPerPage),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (queryData) {
      setData(queryData.data);
      setTotalCount(queryData.pageInfo.count);
    }
  }, [queryData]);

  const handleClickCheckBox = (id: number) => {
    if (!checkedIds.some((checkedId) => checkedId === id)) {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const deleteQuestions = async () => {
    const url = `/v1/questions/${checkedIds[0]}`;
    return await clientInstance.delete(url);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteQuestions(),
    onSuccess: () => {
      alert('삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['get-questions', pageNum - 1] });
    },
  });

  const handleClickDelete = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      mutation.mutate();
    }
  };

  const handleClickTab = (buttonName: string) => {
    setTabName(buttonName);
  };

  const handleClickTitle = (id: number) => {};

  // if (isLoading) {
  //   return <div>loading ...</div>;
  // }

  return (
    <div className="flex flex-col w-9/12 m-auto">
      <div className="flex gap-6 ml-5">
        <TabButton
          onClick={() => handleClickTab('문의내역')}
          buttonName="문의내역"
          selectedTab={tabName}
          isProductDetail={false}
        />
        <TabButton
          onClick={() => handleClickTab('문의하기')}
          buttonName="문의하기"
          selectedTab={tabName}
          isProductDetail={false}
        />
      </div>
      {tabName === '문의하기' ? (
        <QuestionWrite />
      ) : (
        <>
          <p className="text-neutral-400 text-base font-normal font-['ABeeZee'] mb-7 ml-5">
            ※ 회원님이 작성하신 문의를 최신순으로 확인할 수 있습니다.
            <br />※ 답변완료 상태의 글은 삭제할 수 없습니다.
          </p>
          <table className="table-bordered w-full text-center ml-5">
            <thead>
              <tr>
                <th className="w-16"></th>
                <th>등록일자</th>
                <th>제목</th>
                <th>답변여부</th>
              </tr>
            </thead>
            <tbody>
              {data.length !== 0 ? (
                data.map((item: Question, i: number) => (
                  <tr key={i}>
                    <td>
                      {item.status === 'INCOMPLETE' && (
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded bg-white border-solid border-[#38465f]"
                          onClick={() => handleClickCheckBox(item.id)}
                        />
                      )}
                    </td>
                    <td>{dateFormat(item.createdAt, 'YYYY-MM-DD')}</td>
                    <td
                      className="cursor-grabbing hover:text-red-400"
                      onClick={() => handleClickTitle(item.id)}
                    >
                      {item.title}
                    </td>
                    <td>{item.status === 'COMPLETE' ? '답변완료' : '접수'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} align="center">
                    문의하신 내역이 없어요 !
                  </td>
                </tr>
              )}
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
            totalCount={totalCount}
            pageRangeDisplayed={pageRangeDisplayed}
            page={pageNum}
            setPage={setPageNum}
          />
        </>
      )}
    </div>
  );
}
