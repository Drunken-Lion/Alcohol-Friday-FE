import React from 'react';

interface TabButtonProps {
  onClick?: () => void;
  buttonName: string;
}
export default function TabButton({ onClick, buttonName }: TabButtonProps) {
  return (
    <div
      className="text-gray-300 text-base font-normal border-b my-7 cursor-grabbing"
      onClick={onClick}
    >
      {buttonName}
    </div>
  );
}
