import React from 'react';
import Location from '/public/images/location_button.svg';
import Button from '../Button';
import Pagination from '../Pagination';

interface HandlingStoreProps {
  currentAddress: string;
  distance: string;
  liquor: string;
  store: string;
  sotreAddress: string;
}

export default function HandlingStore({
  currentAddress,
  distance,
  liquor,
  store,
  sotreAddress,
}: HandlingStoreProps) {
  return (
    <div>
      <p className="text-zinc-800 text-xl font-bold mb-5">내 주변 취급 점포</p>
      <div className="border border-slate-700 border-opacity-20 text-center rounded-[10px]">
        <table className="table-fixed w-full ">
          <thead>
            <tr className="border-b border-slate-300 border-opacity-20">
              <th>거리</th>
              <th>주류명</th>
              <th>가게명</th>
              <th>가게주소</th>
              <th className="flex items-center gap-1 h-[60px]">
                {currentAddress} <Location />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[60px]">
              <td>{distance}</td>
              <td>{liquor}</td>
              <td>{store}</td>
              <td>{sotreAddress}</td>
              <td>
                <Button
                  buttonName="가게 바로가기"
                  className="rounded-[5px] border border-neutral-400 text-zinc-800 text-sm font-normal px-12 py-2"
                />
              </td>
            </tr>
            <tr className="h-[60px]">
              <td>{distance}</td>
              <td>{liquor}</td>
              <td>{store}</td>
              <td>{sotreAddress}</td>
              <td>
                <Button
                  buttonName="가게 바로가기"
                  className="rounded-[5px] border border-neutral-400 text-zinc-800 text-sm font-normal px-12 py-2"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination totalCount={5} pageRangeDisplayed={10} page={1} setPage={1} />

        {/* <div className="flex justify-between border-b border-slate-300 border-opacity-20 text-zinc-800 text-base font-bold px-10 py-5">
        <div>거리</div>
        <div>주류명</div>
        <div>가게명</div>
        <div>가게주소</div>
        <div className="flex gap-1">
          서울 강서구 화곡동 993-15 <Location />
        </div>
      </div>
      <div className="flex justify-center text-black text-base font-normal px-10 py-5">
        <div>{distance}</div>
        <div>{liquor}</div>
        <div>{store}</div>
        <div>{address}</div>
        <Button
          buttonName="가게 바로가기"
          className="rounded-[5px] border border-neutral-400 text-zinc-800 text-sm font-normal px-12 py-2"
        />
      </div> */}
      </div>
    </div>
  );
}
