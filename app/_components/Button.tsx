import { ButtonProps } from 'app/_types/common';
import React from 'react';

export default function Button({ type, onClick, buttonName, className, disabled }: ButtonProps) {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}
