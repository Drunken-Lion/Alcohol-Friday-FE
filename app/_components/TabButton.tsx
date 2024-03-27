import React from 'react';
import { TabButtonProps } from 'app/_types/common';

export default function TabButton({
  onClick,
  buttonName,
  selectedTab,
  className,
  isActive,
  isProductDetail,
}: TabButtonProps) {
  return (
    <div>
      {isProductDetail ? (
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
      ) : (
        <div
          className={`${
            selectedTab === buttonName ? 'text-blue-900 font-bold' : 'text-gray-300 font-normal'
          } text-base border-b my-7 cursor-grabbing`}
          onClick={onClick}
        >
          {buttonName}
        </div>
      )}
    </div>
  );
}
