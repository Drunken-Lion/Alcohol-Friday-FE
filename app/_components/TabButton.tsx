import React from 'react';
import { TabButtonProps } from 'app/_types/common';

export default function TabButton({ onClick, buttonName, className, isActive }: TabButtonProps) {
  return (
    <div
      className={`${className}
        ${
          isActive
            ? 'text-blue-900 font-bold border-b border-blue-900'
            : 'text-gray-300 font-normal border-b border-gray-300'
        }`}
      onClick={onClick}
    >
      {buttonName}
    </div>
  );
}
