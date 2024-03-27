import { CheckboxProps } from 'app/_types/common';
import React from 'react';

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
    <div>
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
