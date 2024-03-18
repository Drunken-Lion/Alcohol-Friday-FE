'use client';

import React, { useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import TabButton from './TabButton';
import clientInstance from 'app/_service/axios-client';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Pagination from '../Pagination';

export default function ReviewWriteList() {
  const [tabName, setTabName] = useState('리뷰작성');
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [limitPerPage, setLimitPerpage] = useState<number>(10);
  const [status, setStatus] = useState('PENDING');

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleClickTab = (buttonName: string) => {
    setTabName(buttonName);
  };

  const getReviews = async (status = 'PENDING', page = 0, size = 10) => {
    const url = `/v1/members/me/reviews?status=${status}&page=${page}&size=${size}`;
    const res = await clientInstance.get(url);

    console.log(res.data);

    return res.data;
  };

  const { data: queryData } = useQuery({
    queryKey: ['get-reviews', status, pageNum - 1, limitPerPage],
    queryFn: () => getReviews(status, pageNum - 1, limitPerPage),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (queryData) {
      setData(queryData.data);
      setTotalCount(queryData.pageInfo.count);
    }
  }, [queryData]);

  return (
    <>
      <div className="flex flex-col w-9/12 m-auto">
        <div className="flex gap-6 ml-5">
          <TabButton
            onClick={() => handleClickTab('리뷰작성')}
            buttonName="리뷰작성"
            selectedTab={tabName}
          />
          <TabButton
            onClick={() => handleClickTab('작성한 리뷰')}
            buttonName="작성한 리뷰"
            selectedTab={tabName}
          />
        </div>
        <div className="flex gap-6">
          {data.length === 0 ? (
            <div>작성가능한 구매후기가 없습니다.</div>
          ) : (
            data.map((item, i) => (
              <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full">
                <OrderItem
                  storeName="곰세마리 양조장"
                  title="어린꿀술"
                  subTitle="[500ml] 어린꿀술"
                  price="13,500"
                  quantity={1}
                  image="../images/alcohol.png"
                  isValue={true}
                />
              </div>
            ))
          )}
          {/* <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-full">
            <OrderItem
              storeName="곰세마리 양조장"
              title="어린꿀술"
              subTitle="[500ml] 어린꿀술"
              price="13,500"
              quantity={1}
              image="../images/alcohol.png"
              isValue={true}
            />
          </div> */}
        </div>
      </div>
      <Pagination
        totalCount={totalCount}
        pageRangeDisplayed={pageRangeDisplayed}
        page={pageNum}
        setPage={setPageNum}
      />
    </>
  );
}
