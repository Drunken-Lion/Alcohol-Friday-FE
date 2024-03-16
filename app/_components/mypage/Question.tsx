'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Button from '../Button';
import Pagination from '../Pagination';
import dayjs from 'dayjs';
import clientInstance from 'app/_service/axios-client';
import TabButton from './TabButton';
import QuestionWrite from './QuestionWrite';

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
  const [checkedIds, setCheckedIds] = useState<Array<number>>([]);
  const { data: session } = useSession();

  const [tabName, setTabName] = useState<string>('문의내역');

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const getQuestions = async (page = 0, size = 10) => {
    const url = `/v1/questions?page=${page}&size=${size}`;
    const res = await clientInstance.get(url);

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

  const dateFormat = (date: string) => {
    return dayjs(date).format('YYYY-MM-DD');
  };

  const handleClickTab = (buttonName: string) => {
    setTabName(buttonName);
  };

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <div className="m-auto w-9/12 py-7">
      <div className="mx-5">
        <div className="flex gap-6">
          <TabButton
            onClick={() => handleClickTab('문의내역')}
            buttonName="문의내역"
            selectedTab={tabName}
          />
          <TabButton
            onClick={() => handleClickTab('문의하기')}
            buttonName="문의하기"
            selectedTab={tabName}
          />
        </div>
        <p className="text-neutral-400 text-base font-normal font-['ABeeZee'] mb-7">
          ※ 회원님이 작성하신 문의를 최신순으로 확인할 수 있습니다.
          <br />※ 답변완료 상태의 글은 삭제할 수 없습니다.
        </p>
        {tabName === '문의하기' && <QuestionWrite />}
        {tabName === '문의내역' && (
          <>
            <table className="table-bordered w-full text-center">
              <thead>
                <tr>
                  <th className="w-16"></th>
                  <th>등록일자</th>
                  <th>제목</th>
                  <th>답변여부</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: Question, i: number) => (
                  <tr key={i}>
                    <td>
                      {item.status === 'INCOMPLETE' && (
                        // <Checkbox
                        //   className="w-5 h-5 rounded bg-white border-solid border-[#38465f]"
                        //   onChange={() => handleClickCheckBox(item.id)}
                        //   label={''}
                        //   dataName={''}
                        //   value={''}
                        // />
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded bg-white border-solid border-[#38465f]"
                          onClick={() => handleClickCheckBox(item.id)}
                        />
                      )}
                    </td>
                    <td>{dateFormat(item.createdAt)}</td>
                    <td>{item.title}</td>
                    <td>{item.status === 'COMPLETE' ? '답변완료' : '접수'}</td>
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
              totalCount={totalCount}
              pageRangeDisplayed={pageRangeDisplayed}
              page={pageNum}
              setPage={setPageNum}
            />
          </>
        )}
      </div>
    </div>
  );
}
