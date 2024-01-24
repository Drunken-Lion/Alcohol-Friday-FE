import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function login() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-inter font-bold mt-24">로그인</p>
      <p className="text-base text-center mt-5">
        전통주 홈페이지에 오신걸 환영합니다! <br />
        버튼을 클릭하여 로그인을 진행해주세요.
      </p>
      <div className="flex flex-row gap-7 items-center w-450px h-32 mt-5 rounded-lg border-solid border-2 border-gray-300 bg-gray-300">
        <img src="/images/adult_19.png" alt="19세 미만 이용 금지" className="pl-7" />
        <span className="text-sm pr-7">
          이 정보내용은 청소년유해매체물로서 정보통신망이용촉진 및 정보보호등에 관한 법률 및
          청소년보호법의 규정에 의하여 19세 미만의 청소년이 이용할 수 없습니다.
        </span>
      </div>
      <button>
        <img src="/images/kakao_login_medium_wide.png" className="w-80 h-12 mt-7" />
      </button>
      <hr className="w-450px mt-7" />
      <p className="mt-7">
        지금 <b>회원가입</b>하고 더 많은 기능을 사용해보세요!
      </p>
      <Link href="/signup">
        <button className="w-80 h-12 mt-5 rounded-lg border-solid border-2 border-gray-400 bg-gray-300">
          회원가입
        </button>
      </Link>
    </div>
  );
}
