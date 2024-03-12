import React from 'react';

export default function signup() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-inter font-bold mt-24">회원가입</p>
      <div className="flex flex-row mt-9">
        <img src="/images/agree_terms.svg" className="shrink-0" />
        <div className="flex relative">
          <div className="flex absolute">
            <img src="/images/enter_info_person.svg" className="shrink-0 left-5 top-5" />
          </div>
          <img src="/images/enter_info_circle.svg" className="shrink-0" />
        </div>
      </div>
    </div>
  );
}
