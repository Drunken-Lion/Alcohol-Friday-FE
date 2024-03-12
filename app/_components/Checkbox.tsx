import React, { ReactNode } from 'react';

interface CheckboxProps {
  children?: ReactNode;
  isChecked?: boolean;
  className?: string;
  onChange?: () => void;
}

export default function Checkbox({ children, isChecked, className, onChange }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" className={className} checked={isChecked} onChange={onChange} />
      {children}
    </label>
  );
}
