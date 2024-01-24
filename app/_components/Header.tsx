import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link href="/">전통주 알아보기</Link>
          </li>
          <li>내주변 전통주</li>
          <li>
            <Link href="/store">스토어</Link>
          </li>
          <li>고객센터</li>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
