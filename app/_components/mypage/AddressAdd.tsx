'use client';

import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import clientInstance from 'app/_service/axios-client';
import Button from '../Button';
import Textarea from '../Textarea';
import Checkbox from '../Checkbox';

type PostCode = {
  zonecode: string;
  address: string;
};

interface AddressAddProps {
  setPageType: (pageType: string) => void;
}

export default function AddressAdd({ setPageType }: AddressAddProps) {
  const [postcode, setPostcode] = useState<string>();
  const [address, setAddress] = useState<string>();

  const [req, setReq] = useState({
    recipient: '',
    phone: 0,
    postcode: '',
    address: '',
    detail: '',
    request: '',
    isPrimary: false,
  });

  const open = useDaumPostcodePopup();

  const handlePostcodeSearchComplete = (data: PostCode) => {
    setPostcode(data.zonecode);
    setAddress(data.address);
    setReq((req) => ({ ...req, postcode: data.zonecode, address: data.address }));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'isPrimary') {
      setReq((req) => ({ ...req, isPrimary: !req.isPrimary }));
    } else if (name === 'phone') {
      setReq((req) => ({ ...req, phone: Number.parseInt(value) }));
    } else {
      setReq((req) => ({ ...req, [name]: value }));
    }
    console.log(req);
  };

  const handleTextareaOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setReq((req) => ({ ...req, request: value }));
  };

  const handleIsOpen = () => {
    open({ onComplete: handlePostcodeSearchComplete });
  };

  const handleClickCancel = () => {
    if (window.confirm('배송지 등록을 취소하시겠습니까?')) {
      setPageType('list');
    }
  };

  const addAddress = async () => {
    const url = '/v1/addresses';
    return await clientInstance.post(url, req);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => addAddress(),
    onSuccess: () => {
      alert('등록되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['get-addresses'] });
      setPageType('list');
    },
    onError: () => {
      alert('등록에 실패하였습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm('배송지를 등록하시겠습니까?')) {
      mutation.mutate();
    }
  };

  return (
    <div className="m-auto w-96 mt-[60px] mb-44 flex flex-col gap-[10px]">
      <label htmlFor="recipient">
        받는 분 <span className="text-red-500"> *</span>
      </label>
      <input
        type="text"
        name="recipient"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] pl-3"
        onChange={handleOnChange}
      />
      <label htmlFor="phone">
        휴대전화 <span className="text-red-500"> *</span>
      </label>
      <input
        type="text"
        name="phone"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] pl-3"
        onChange={handleOnChange}
      />
      <div className="flex flex-row items-end justify-between">
        <div>
          <label htmlFor="postcode">주소</label>
          <input
            type="text"
            name="postcode"
            className="border border-slate-300 rounded-md w-[250px] h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] pl-3"
            placeholder="우편번호"
            value={postcode || ''}
            onChange={handleOnChange}
            disabled
          />
        </div>
        <Button
          buttonName="우편번호 찾기"
          className="w-[110px] h-[50px] bg-[#384660] rounded-lg border-solid border-[#384660] text-white text-sm font-['Pretendard']"
          onClick={handleIsOpen}
        />
      </div>
      <input
        type="text"
        name="address"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] pl-3"
        placeholder="도로명 주소"
        value={address || ''}
        onChange={handleOnChange}
        disabled
      />
      <input
        type="text"
        name="detail"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] pl-3"
        placeholder="상세 주소"
        onChange={handleOnChange}
      />
      <Textarea
        id="request"
        label="배송메모"
        onChange={handleTextareaOnchange}
        rows={4}
        placeholder=""
        className="w-full pl-3 pt-3 flex flex-col"
      />
      <div className="flex gap-1 items-center">
        <Checkbox
          dataName="isPrimary"
          className="rounded bg-white border-solid border-[#38465f]"
          onChange={handleOnChange}
        />
        <span>기본 배송지로 등록</span>
      </div>
      <div className="flex justify-between">
        <Button
          buttonName="취소"
          className="w-[175px] h-[60px] mt-7 bg-gray-100 rounded-[10px] font-normal font-['ABeeZee'] text-black text-base"
          onClick={handleClickCancel}
        />
        <Button
          buttonName="저장"
          className="w-[175px] h-[60px] mt-7 bg-slate-700 rounded-[10px] font-normal font-['ABeeZee'] text-white text-base"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
