import React, { ReactNode } from 'react';

interface CheckboxProps {
  label: string;
  children?: ReactNode;
  dataName: string;
  isChecked?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  label,
  children,
  dataName,
  isChecked,
  className,
  value,
  onChange,
}: CheckboxProps) {
  return (
    <div className="flex flex-row items-center">
      <input
        type="checkbox"
        name={dataName}
        className={className}
        checked={isChecked}
        onChange={onChange}
        value={value}
      />
      {label !== '' && (
        <label>
          {children}
          {label}
        </label>
      )}
    </div>
  );
}
