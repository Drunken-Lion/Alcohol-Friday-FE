import React, { useState } from 'react';

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
}

export default function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  className,
}: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border border-slate-300 rounded-md ${className}`}
      />
    </div>
  );
}
