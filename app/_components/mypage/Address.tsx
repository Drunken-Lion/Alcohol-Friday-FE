import React from 'react';
import AddressItem from './AddressItem';
import Button from '../Button';

const sample = [
  {
    id: 0,
    isPrimary: true,
    address: '서울특별시 강서구 화곡동 993-15',
    addressDetail: '501호',
    postcode: 12345,
    recipient: '김태섭',
    phone: '010-1234-1234',
    request: '부재 시 경비실에 맡겨주세요.',
  },
  {
    id: 1,
    isPrimary: false,
    address: '서울특별시 강서구 화곡동 993-15',
    addressDetail: '301호',
    postcode: 12345,
    recipient: '김나다',
    phone: '010-1234-9999',
    request: '문 앞에 놔주세요.',
  },
  {
    id: 2,
    isPrimary: false,
    address: '서울특별시 강서구 화곡동 993-15',
    addressDetail: '201호',
    postcode: 12345,
    recipient: '김가나',
    phone: '010-1234-5678',
    request: '빨리 와주세요 !!',
  },
];

export default function Address() {
  return (
    <div className="m-auto w-1/3 py-16">
      {sample.map((item, i) => (
        <>
          <AddressItem key={i} item={item} />
          <br />
        </>
      ))}
      <Button
        className="w-full h-[60px] px-[60px] mt-4 mb-28 bg-gray-100 rounded-[10px] justify-center items-center gap-2.5 inline-flex"
        buttonName="+ 새로운 배송지"
        // onClick={}
      />
    </div>
  );
}
