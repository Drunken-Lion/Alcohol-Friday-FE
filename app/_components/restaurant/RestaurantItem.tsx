import React from 'react';
import { RestaurantProductProp } from 'app/_types/restaurant';

export default function RestaurantItem({
  id,
  alcohol,
  files,
  name,
  stockStatus,
}: RestaurantProductProp) {
  return (
    <div className="flex gap-7">
      <div className="rounded-[10px] border border-slate-700 border-opacity-20 px-16 py-6">
        <img src={files.file[0].path} className="w-[71.76px] h-[206.27px]" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-zinc-800 text-xl font-bold">{name}</p>
        <p className="text-zinc-800 text-xl font-normal">도수:{alcohol}</p>
        <p className="text-blue-900 text-xl font-normal">{stockStatus}</p>
      </div>
    </div>
  );
}
