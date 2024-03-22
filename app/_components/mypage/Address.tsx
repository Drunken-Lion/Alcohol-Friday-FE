'use client';

import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import clientInstance from 'app/_service/axios-client';
import AddressItem from './AddressItem';
import Button from '../Button';
import AddressAdd from './AddressAdd';

type Address = {
  id: number;
  isPrimary: boolean;
  address: string;
  addressDetail: string;
  postcode: string;
  recipient: string;
  phone: number;
  request: string;
};

export default function Address() {
  const [pageType, setPageType] = useState<string>('list');
  const [data, setData] = useState<Array<Address>>([]);

  const handleClickAddressAdd = () => {
    if (data.length === 3) {
      return alert('배송지는 최대 3곳까지 가능합니다.');
    }

    setPageType('add');
  };

  const getAddresses = async () => {
    const url = '/v1/members/me/addresses';
    try {
      const res = await clientInstance.get(url);

      return res.data;
    } catch {
      setData([]);
    }
  };

  const { isLoading, data: queryData } = useQuery({
    queryKey: ['get-addresses'],
    queryFn: () => getAddresses(),
  });

  useEffect(() => {
    if (queryData) {
      setData(queryData);
    }
  }, [queryData]);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <>
      {pageType === 'list' ? (
        <div className="m-auto w-1/3 py-16">
          {data.length === 0 ? (
            <div>등록된 배송지가 없습니다.</div>
          ) : (
            data.map((item, i) => (
              <>
                <AddressItem key={`address-${item.id}`} item={item} />
                <br />
              </>
            ))
          )}
          <Button
            className="w-full h-[60px] px-[60px] mt-4 mb-28 bg-gray-100 rounded-[10px] justify-center items-center gap-2.5 inline-flex"
            buttonName="+ 새로운 배송지"
            onClick={handleClickAddressAdd}
          />
        </div>
      ) : (
        <AddressAdd setPageType={setPageType} />
      )}
    </>
  );
}
