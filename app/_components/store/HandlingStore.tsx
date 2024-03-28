import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';
import Pagination from '../Pagination';
import Portal from '../Portal';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import Location from '/public/images/location_button.svg';
import useRestaurant from 'app/_hooks/useRestaurant';
import { RestaurantCheckItemData, RestaurantCheckRequestData } from 'app/_types/restaurant';

export default function HandlingStore({
  userLocationLatitude,
  userLocationLongitude,
  itemId,
}: RestaurantCheckRequestData) {
  const [pageNum, setPageNum] = useState<number>(1);
  const { restaurantCheck } = useRestaurant();
  const { isLoading, isError, items } = restaurantCheck(
    userLocationLatitude,
    userLocationLongitude,
    itemId,
  );

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    <NotFound />;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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
              {/* <th className="flex justify-center items-center gap-1 h-[60px]">
                {items.data.address} <Location onClick={toggleModal} className="cursor-grabbing" />
              </th> */}
            </tr>
          </thead>
          <tbody>
            {items?.data.map((item: RestaurantCheckItemData) => {
              return (
                <tr className="h-[60px]">
                  <td>{item.distanceKm}km</td>
                  <td>{item.productName}</td>
                  <td>{item.restaurantName}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link href={`/restaurant/${item.restaurantId}`}>
                      <Button
                        buttonName="가게 바로가기"
                        className="rounded-[5px] border border-neutral-400 text-zinc-800 text-sm font-normal px-12 py-2"
                      />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalCount={items?.pageInfo.count}
          pageRangeDisplayed={10}
          page={pageNum}
          setPage={setPageNum}
        />
      </div>
    </div>
  );
}
