import React from 'react';
import { InputProps } from 'app/_types/common';

export default function Input({ label, ...rest }: InputProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...rest} />
    </div>
  );
}
