import React from 'react';

interface TabButtonProps {
  onClick?: () => void;
  buttonName: string;
  selectedTab: string;
}
export default function TabButton({ onClick, buttonName, selectedTab }: TabButtonProps) {
  console.log();
  return (
    <div
      className={`${selectedTab === buttonName ? 'text-blue-900 font-bold' : 'text-gray-300 font-normal'} text-base border-b my-7 cursor-grabbing`}
      onClick={onClick}
    >
      {buttonName}
    </div>
  );
}
