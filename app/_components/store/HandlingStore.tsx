import React from 'react';
import Button from '../Button';
import Pagination from '../Pagination';
import Location from '/public/images/location_button.svg';
import { HandlingStoreProps } from 'app/_types/store';

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
              <th className="flex justify-center items-center gap-1 h-[60px]">
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
      </div>
    </div>
  );
}
