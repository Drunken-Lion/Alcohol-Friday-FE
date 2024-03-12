import React from 'react';
import { act } from 'react-dom/test-utils';

interface ButtonProps {
  type?: 'submit' | undefined; // type이 undefined인 경우에는 'button'으로 지정
  onClick?: () => void;
  buttonName: string;
  className: string;
  disabled?: boolean;
  active?: boolean;
}

export default function Button({
  type,
  onClick,
  buttonName,
  className,
  disabled,
  active,
}: ButtonProps) {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className={className}
      disabled={disabled}
      aria-current={active}
    >
      {buttonName}
    </button>
  );
}
