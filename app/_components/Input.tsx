import React, { useState } from 'react';

interface InputProps {
  label?: string;
  required?: boolean;
  name?: string;
  value?: string;
  placeholder: string;
  className: string;
  readOnly?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  required,
  name,
  value,
  placeholder,
  className,
  readOnly = false,
  disabled = false,
  onChange,
}: InputProps) {
  // const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <div>
      {label && (
        <>
          <label htmlFor={name}>{label}</label>
          {required && <span className="text-red-500"> *</span>}
          <br />
        </>
      )}
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={`border border-slate-300 rounded-md ${className}`}
        readOnly={readOnly}
        disabled={disabled}
      />
    </div>
  );
}
