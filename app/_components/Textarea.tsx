import React, { useState } from 'react';

interface TextareaProps {
  label: string;
  id: string;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder: string;
  className: string;
}

export default function Textarea({
  label,
  id,
  rows = 3,
  onChange,
  value,
  placeholder,
  className,
}: TextareaProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`border border-slate-300 rounded-md ${className}`}
      ></textarea>
    </div>
  );
}
