import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import serverInstance from 'app/_service/axios-server';
import Button from '../Button';

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

interface AddressItemProps {
  item: Address;
}

export default function AddressItem({ item }: AddressItemProps) {
  const phone = `0${item.phone.toString()}`.replace(/(\d{2,3})(\d{3,4})(\d{4})/, '$1-$2-$3');

  const deleteAddress = async () => {
    const url = `/v1/addresses/${item.id}`;
    return await serverInstance.delete(url);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteAddress(),
    onSuccess: () => {
      alert('삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['get-addresses'] });
    },
    onError: () => {
      alert('삭제에 실패하였습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  const handleClickDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm('배송지를 삭제하시겠습니까?')) {
      mutation.mutate();
    }
  };

  return (
    <div className="h-56 rounded border-solid border-[#D1D7DD] border p-6">
      <div className="flex items-center">
        <div className="text-[#333333] font-normal font-['ABeeZee'] text-xl">{item.recipient}</div>
        {item.isPrimary && (
          <div className="flex justify-center items-center w-20 h-6 rounded-2xl border border-solid border-[#354D8B] ml-2 text-[#354D8B] font-['ABeeZee'] font-normal text-sm break-words text-center">
            기본배송지
          </div>
        )}
        <div className="flex-grow" />
        <div className="flex gap-2 pr-0">
          <Button
            className="rounded-lg border border-stone-500 text-stone-500 text-base font-normal font-['ABeeZee'] py-1 px-2"
            buttonName="수정"
          />
          <Button
            className="rounded-lg border border-stone-500 text-stone-500 text-base font-normal font-['ABeeZee'] py-1 px-2"
            buttonName="삭제"
            onClick={handleClickDelete}
          />
        </div>
      </div>
      <div className="text-[#333333] font-normal font-['ABeeZee'] text-base break-words mt-[10px]">
        {phone}
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
