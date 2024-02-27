import React from 'react';

interface ButtonProps {
  type?: 'submit' | undefined; // type이 undefined인 경우에는 'button'으로 지정
  onClick?: () => void;
  buttonName: string;
  className: string;
}

export default function Button({ type, onClick, buttonName, className }: ButtonProps) {
  return (
    <button type={type ? type : 'button'} onClick={onClick} className={className}>
      {buttonName}
    </button>
  );
}
