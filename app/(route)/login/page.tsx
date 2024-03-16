'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProviders, signIn } from 'next-auth/react';

export default function login() {
  // const KAKAO_REDIRECT_URI = 'http://localhost:3000/api/auth/callback/kakao';
  const [providers, setProviders] = useState('null');

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, []);

  // 추가된 부분
  const handleKakao = async () => {
    const result = await signIn('kakao', {
      redirect: true,
      // callbackUrl: '/api/auth/kakao',
      callbackUrl: '/',
    });
  };

  return (
    <div className="m-auto flex flex-col items-center">
      <p className="text-[40px] font-bold font-['Inter'] mt-24">로그인</p>
      <p className="text-base text-center mt-5">
        전통주 홈페이지에 오신걸 환영합니다! <br />
        버튼을 클릭하여 로그인을 진행해주세요.
      </p>
      <div className="flex flex-row gap-7 items-center w-[450px] h-32 mt-5 rounded-[20px] border-solid border-2 border-gray-300 bg-gray-300">
        <img src="/images/adult_19.png" alt="19세 미만 이용 금지" className="pl-7" />
        <span className="text-sm pr-7">
          이 정보내용은 청소년유해매체물로서 정보통신망이용촉진 및 정보보호등에 관한 법률 및
          청소년보호법의 규정에 의하여 19세 미만의 청소년이 이용할 수 없습니다.
        </span>
      </div>
      <button onClick={() => handleKakao()}>
        <img src="/images/kakao_login_medium_wide.png" className="w-80 h-12 mt-7" />
      </button>
    </div>
  );
}
