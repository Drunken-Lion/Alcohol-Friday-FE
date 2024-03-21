'use client';

import React, { useEffect, useState } from 'react';
import OrderStatus from './OrderStatus';
import clientInstance from 'app/_service/axios-client';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Orders } from 'app/_types/mypage/orders';
import { dateFormat, getOrderStatus } from 'app/_utils/common';
import OrderItem from './OrderItem';

export default function Order() {
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [limitPerPage, setLimitPerpage] = useState<number>(10);
  const [data, setData] = useState<Orders[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const getOrders = async (page = 0, size = 10) => {
    const url = '/v1/members/me/orders';
    const res = await clientInstance.get(url, { params: { page, size } });

    return res.data;
  };

  const { data: queryData } = useQuery({
    queryKey: ['get-orders', pageNum - 1],
    queryFn: () => getOrders(pageNum - 1, limitPerPage),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (queryData) {
      setData(queryData.data);
      setTotalCount(queryData.pageInfo.count);
    }
  }, [queryData]);

  return (
    <div>
      <OrderStatus count={totalCount} />
      <div className="flex flex-col gap-3">
        {data.length === 0 ? (
          <div>
            주문내역이 없네요 ! <Link href="/store">주문하러 가기</Link>
          </div>
        ) : (
          data.map((item, i) => (
            <div className="m-auto w-8/12 rounded-md border border-solid border-[#D1D7DD] p-8">
              <div className="flex flex-row gap-3 items-center">
                <span className="text-zinc-800 text-xl font-normal font-['Pretendard']">
                  {dateFormat(item.createdAt, 'YYYY.MM.DD.')}
                </span>
                <span className="text-gray-300 text-xl font-normal font-['Pretendard']">|</span>
                <span className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                  주문번호 {item.orderNo}
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center w-[1140px] h-[60px] bg-red-500 bg-opacity-20 rounded-md mt-8 pl-4">
                <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                  {item.recipient}
                </span>
                <span className="text-zinc-800 text-base font-normal font-['Pretendard']">|</span>
                <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                  {`0${item.phone.toString()}`.replace(/(\d{2,3})(\d{3,4})(\d{4})/, '$1-$2-$3')}
                </span>
              </div>
              <div className="text-[#B55849] text-base font-['Pretendard'] mt-5">
                {getOrderStatus(item.orderStatus)}
              </div>
              <div className="w-[1140px] bg-white rounded-md border border-[#EEEEEE] border-solid mt-5 pt-7 pb-6 px-7">
                {item.orderDetails.map((orderDetail, i) => (
                  <div className="flex flex-col py-4">
                    <OrderItem
                      orderDetailId={orderDetail.id}
                      title={orderDetail.name}
                      price={orderDetail.totalPrice.toLocaleString('ko-KR')}
                      quantity={orderDetail.quantity}
                    />
                    {i + 1 !== item.orderDetails.length && (
                      <div className="m-auto w-[1080px] h-0 border border-[#EEEEEE] border-solid mt-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
