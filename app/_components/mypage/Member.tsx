'use client';

import React, { useEffect, useState } from 'react';

import { Member } from 'app/_types/member';
import Button from '../Button';
import clientInstance from 'app/_service/axios-client';
import { useQuery } from '@tanstack/react-query';

export default function Members() {
  const [member, setMember] = useState<Member>();
  const [phone, setPhone] = useState<string>('');

  const [data, setData] = useState({
    phone: 0,
    nickname: '',
  });

  const getMember = async () => {
    const url = '/v1/members/me';
    const res = await clientInstance.get(url);

    return res.data;
  };

  const { data: queryData } = useQuery({
    queryKey: ['get-member'],
    queryFn: () => getMember(),
  });

  useEffect(() => {
    if (queryData) {
      console.log(queryData);
      setMember(queryData);
    }
  }, [queryData]);

  useEffect(() => {
    if (member?.phone !== undefined) {
      const phone = `0${member?.phone.toString()}` || '';
      setPhone(phone?.replace(/(\d{2,3})(\d{3,4})(\d{4})/, '$1-$2-$3'));
    }
  }, [member]);

  const handleOnChange = () => {
    console.log('onChange !!');
  };

  return (
    <div className="m-auto w-[396px] mt-[60px] mb-44 flex flex-col gap-[10px]">
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        name="email"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] text-[#999999] pl-3"
        disabled
        value={member?.email}
      />
      <label htmlFor="name">이름</label>
      <input
        type="text"
        name="name"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] text-[#999999] pl-3"
        disabled
        value={member?.name}
      />
      {/* <label htmlFor="birth">생년월일</label>
      <input
        type="text"
        name="birth"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] text-[#999999] pl-3"
        disabled
      /> */}
      <label htmlFor="phone">
        휴대전화 <span className="text-red-500"> *</span>
      </label>
      <input
        type="text"
        name="phone"
        className="border border-slate-300 rounded-md w-full h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] pl-3"
        onChange={handleOnChange}
        value={phone}
      />
      <Button
        buttonName="성인인증"
        className="w-full h-10 bg-white rounded-lg border border-[#354D8B] border-solid font-['Pretendard'] font-normal text-sm text-[#354D8B]"
      />
      <div className="flex flex-row items-end justify-between">
        <div>
          <label htmlFor="nickname">
            별명 <span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            name="nickname"
            className="border border-slate-300 rounded-md w-[264px] h-[50px] bg-white border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)] pl-3"
            onChange={handleOnChange}
            placeholder="닉네임 없어용"
            value={member?.nickname}
          />
        </div>
        <Button
          buttonName="중복확인"
          className="w-[110px] h-[50px] bg-white rounded-lg border border-[#354D8B] border-solid font-['Pretendard'] font-normal text-sm text-[#354D8B]"
        />
      </div>
      <span className="text-red-500">* 별명을 입력해주세요.</span>
      <Button
        buttonName="저장"
        className="w-full h-[60px] mt-12 bg-gray-100 rounded-[10px] font-normal font-['ABeeZee'] text-black text-base"
        // onClick={handleSubmit}
      />
    </div>
  );
}
