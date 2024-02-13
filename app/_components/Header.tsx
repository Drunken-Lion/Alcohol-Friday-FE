'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import Menu from '/public/images/menuButton.svg';

export default function Header() {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleMenuItemClick = () => {
    setToggleOpen(false);
  };

  return (
    <React.Fragment>
      <nav
        className={`flex justify-between px-4 lg:justify-center ${
          toggleOpen ? 'bg-slate-700' : 'bg-slate-800'
        } text-white border-b border-white border-opacity-10`}
      >
        <Link href="/" className="py-3 lg:py-2">
          <img src="./images/logo.png" />
        </Link>
        {/* 메뉴 아이콘 (모바일 화면) */}
        <div className="lg:hidden my-auto">
          <button className="text-white" onClick={() => setToggleOpen(!toggleOpen)}>
            <Menu />
          </button>
        </div>

        {/* Dropdown menu */}
        {toggleOpen && (
          <div className="lg:hidden absolute z-50 top-[91px] left-0 w-full bg-slate-700 text-white">
            <ul className="flex flex-col text-white text-base font-bold ">
              <li
                className="flex pl-4 items-center h-20 bg-slate-700 border-b border-white border-opacity-10"
                onClick={handleMenuItemClick}
              >
                <Link href="/">전통주 알아보기</Link>
              </li>
              <li
                className="flex pl-4 items-center h-20 bg-slate-700 border-b border-white border-opacity-10"
                onClick={handleMenuItemClick}
              >
                <Link href="/restaurant">내주변 전통주</Link>
              </li>
              <li
                className="flex pl-4 items-center h-20 bg-slate-700 border-b border-white border-opacity-10"
                onClick={handleMenuItemClick}
              >
                <Link href="/store">스토어</Link>
              </li>
              <li
                className="flex pl-4 items-center h-20 bg-slate-700 border-b border-white border-opacity-10"
                onClick={handleMenuItemClick}
              >
                고객센터
              </li>
              <li
                className="flex pl-4 items-center h-20 bg-slate-700 border-b border-white border-opacity-10"
                onClick={handleMenuItemClick}
              >
                로그인
              </li>
            </ul>
          </div>
        )}

        <ul className="hidden lg:flex flex-row gap-x-24 text-xl mx-32 my-auto">
          <li>
            <Link href="/">전통주 알아보기</Link>
          </li>
          <Link href="/restaurant">
            <li>내주변 전통주</li>
          </Link>
          <li>
            <Link href="/store">스토어</Link>
          </li>
          <li>고객센터</li>
        </ul>
        <ul className="hidden lg:flex flex-row gap-x-5 text-sm mx-8 my-auto">
          <li>로그인</li>
          {/* <li>회원가입</li> */}
        </ul>
      </nav>
    </React.Fragment>
  );
}
