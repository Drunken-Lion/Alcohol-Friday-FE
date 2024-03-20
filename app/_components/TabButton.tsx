import React from 'react';

interface TabButtonProps {
  onClick?: () => void;
  buttonName: string;
  className?: string;
}
export default function TabButton({ onClick, buttonName, className }: TabButtonProps) {
  return (
    <div className={className} onClick={onClick}>
      {buttonName}
    </div>
  );
}
