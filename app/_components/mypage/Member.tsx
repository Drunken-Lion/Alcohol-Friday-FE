import React from 'react';
import Input from '../Input';

export default function Member() {
  const handleOnChange = () => {
    console.log('onChange !!');
  };

  return (
    <div className="m-auto w-96 mt-[60px]">
      {/* <span className="text-black text-base font-normal font-['ABeeZee']">이메일</span> */}
      <Input
        label="이메일"
        name="email"
        className="w-full h-[50px] bg-white rounded-md border border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)]"
        onChange={handleOnChange}
        placeholder=""
        value=""
      />
      <Input
        label="이메일"
        name="email"
        className="w-full h-[50px] bg-white rounded-md border border-solid border-[rgba(56.18, 70.02, 95.62, 0.15)]"
        onChange={handleOnChange}
        placeholder=""
        value=""
      />
    </div>
  );
}
