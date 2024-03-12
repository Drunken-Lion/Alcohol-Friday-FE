import React from 'react';
import Button from '../Button';

type Address = {
  id: number;
  isPrimary: boolean;
  address: string;
  addressDetail: string;
  postcode: number;
  recipient: string;
  phone: string;
  request: string;
};

interface AddressItemProps {
  item: Address;
}

export default function AddressItem({ item }: AddressItemProps) {
  return (
    <div className="h-56 bg-white rounded border-solid border-[#D1D7DD] border p-6">
      <div className="flex items-center">
        <div className="text-[#333333] font-normal font-['ABeeZee'] text-xl">{item.recipient}</div>
        {item.isPrimary && (
          <div className="w-20 h-6 bg-white rounded-2xl border border-solid border-[#354D8B] ml-2 text-[#354D8B] font-['ABeeZee'] font-normal text-sm break-words text-center">
            기본배송지
          </div>
        )}
        <div className="flex-grow" />
        <div className="flex gap-2 pr-0">
          <Button
            className="w-[50px] h-[30px] bg-white rounded-lg border border-stone-500 text-stone-500 text-base font-normal font-['ABeeZee']"
            buttonName="수정"
          />
          <Button
            className="w-[50px] h-[30px] bg-white rounded-lg border border-stone-500 text-stone-500 text-base font-normal font-['ABeeZee']"
            buttonName="삭제"
          />
        </div>
      </div>
      <div className="text-[#333333] font-normal font-['ABeeZee'] text-base break-words mt-[10px]">
        {item.phone}
      </div>
      <div className="text-[#333333] font-normal font-['ABeeZee'] text-base break-words mt-5">
        {item.address}
      </div>
      <div className="text-[#333333] font-normal font-['ABeeZee'] text-base break-words mt-1">
        {item.addressDetail}
      </div>
      <div className="text-[#999999] font-normal font-['ABeeZee'] text-base break-words mt-5">
        {item.request}
      </div>
    </div>
  );
}
