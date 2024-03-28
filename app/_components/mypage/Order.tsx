'use client';

import React, { useEffect, useState } from 'react';
import OrderStatus from './OrderStatus';
import clientInstance from 'app/_service/axios-client';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Orders } from 'app/_types/mypage/orders';
import { dateFormat, getOrderStatus } from 'app/_utils/common';
import OrderItem from '../OrderItem';
import Button from '../Button';

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
          <div className="m-auto">
            주문내역이 없네요 !{' '}
            <Link href="/store" className="text-red-400 decoration-solid">
              주문하러 가기
            </Link>
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
              <div className="flex flex-row gap-2 items-center w-full h-[60px] bg-red-500 bg-opacity-20 rounded-md mt-8 pl-4">
                <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                  {item.recipient}
                </span>
                <span className="text-zinc-800 text-base font-normal font-['Pretendard']">|</span>
                <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                  {`0${item.phone}`}
                </span>
              </div>
              <div className="text-[#B55849] text-base font-['Pretendard'] mt-5">
                {getOrderStatus(item.orderStatus)[0]}
              </div>
              <div className="w-full bg-white rounded-md border border-[#EEEEEE] border-solid mt-5 pt-7 pb-6 px-7">
                {item.orderDetails.map((orderDetail, i) => (
                  <div className="flex flex-col py-4">
                    <div className="flex flex-row justify-between gap-7">
                      <div className="w-full">
                        <OrderItem
                          orderDetailId={orderDetail.id}
                          image={orderDetail.file?.file[0].path}
                          title={orderDetail.name}
                          price={orderDetail.totalPrice}
                          quantity={orderDetail.quantity}
                        />
                      </div>
                      <div className="flex justify-center w-0 h-40 border border-zinc-100" />
                      <div className="flex flex-col gap-4 justify-center">
                        {getOrderStatus(item.orderStatus)[1] !== '' && (
                          <Button
                            buttonName={getOrderStatus(item.orderStatus)[1]}
                            className="w-[180px] h-[35px] bg-white rounded-lg border border-gray-300 text-center text-stone-500 text-sm font-normal font-['Pretendard']"
                          />
                        )}
                        <Button
                          buttonName="판매자 문의"
                          className="w-[180px] h-[35px] bg-white rounded-lg border border-gray-300 text-center text-stone-500 text-sm font-normal font-['Pretendard']"
                        />
                      </div>
                    </div>
                    {i + 1 !== item.orderDetails.length && (
                      <div className="m-auto w-full h-0 border border-[#EEEEEE] border-solid mt-8" />
                    )}
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-row justify-between">
                <div>
                  <div className="text-zinc-800 text-xl font-normal font-['Pretendard'] mt-5">
                    받는 분 정보
                  </div>
                  <div className="flex flex-col w-[580px] h-[150px] bg-white rounded-md border border-[#EEEEEE] border-solid mt-5 p-6 gap-4">
                    <div className="flex flex-row gap-6">
                      <span className="text-neutral-400 text-base font-normal font-['Pretendard']">
                        받는분
                      </span>
                      <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                        {item.recipient} / {`0${item.phone}`}
                      </span>
                    </div>
                    <div className="flex flex-row gap-6">
                      <span className="text-neutral-400 text-base font-normal font-['Pretendard']">
                        주소
                      </span>
                      <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                        {item.address} {item.addressDetail} [{item.postcode}]
                      </span>
                    </div>
                    <div className="flex flex-row gap-6">
                      <span className="text-neutral-400 text-base font-normal font-['Pretendard']">
                        배송메모
                      </span>
                      <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-zinc-800 text-xl font-normal font-['Pretendard'] mt-5">
                    결제 정보
                  </div>
                  <div className="flex flex-col w-[580px] h-[244px] bg-white rounded-md border border-[#EEEEEE] border-solid mt-5 p-6 gap-4">
                    <div className="flex flex-row justify-between">
                      <span className="text-neutral-400 text-base font-normal font-['Pretendard']">
                        상품금액
                      </span>
                      <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                        {item.price.toLocaleString('ko-KR')} 원
                      </span>
                    </div>
                    <div className="flex flex-row justify-between">
                      <span className="text-neutral-400 text-base font-normal font-['Pretendard']">
                        배송비
                      </span>
                      <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                        {item.deliveryPrice.toLocaleString('ko-KR')} 원
                      </span>
                    </div>
                    <div className="flex flex-row justify-between">
                      <span className="text-neutral-400 text-base font-normal font-['Pretendard']">
                        주문금액
                      </span>
                      <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                        {item.totalPrice.toLocaleString('ko-KR')} 원
                      </span>
                    </div>
                    <div className="flex flex-row justify-between">
                      <span className="text-neutral-400 text-base font-normal font-['Pretendard']">
                        신용카드
                      </span>
                      <span className="text-zinc-800 text-base font-normal font-['Pretendard']">
                        {item.totalPrice.toLocaleString('ko-KR')} 원
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-neutral-400 text-sm font-normal font-['Pretendard']">
                        ({dateFormat(item.createdAt, `YYYY년 MM월 DD일 / HH:mm`)})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
