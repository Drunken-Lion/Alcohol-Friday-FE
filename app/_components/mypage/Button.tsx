import React from 'react';

type ButtonProps = {
  buttonName: string;
};

export default function Button({ buttonName }: ButtonProps) {
  return (
    <div className="flex justify-center py-2 text-stone-500 text-sm font-normal w-48 bg-white rounded-lg border border-gray-300">
      {buttonName}
    </div>
  );
}
