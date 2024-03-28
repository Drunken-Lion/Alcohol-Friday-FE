import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { CiClock2 } from 'react-icons/ci';
import { MdOutlinePets } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { FaParking } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import { FaBabyCarriage } from 'react-icons/fa';
import { MdOutlineFireplace } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi2';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { LuParkingSquareOff } from 'react-icons/lu';
import { FaRestroom } from 'react-icons/fa';
import { TbWheelchair } from 'react-icons/tb';
import { FaWheelchair } from 'react-icons/fa';
import useRestaurant from 'app/_hooks/useRestaurant';
import { ProvisionIcons } from 'app/_types/restaurant';
import Loading from 'app/loading';
import NotFound from 'app/not-found';

export default function RestaurantInfo({ restaurantId }: { restaurantId: number }) {
  const { restaurantInfo } = useRestaurant();
  const { isLoading, isError, items } = restaurantInfo(restaurantId);

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    <NotFound />;
  }

  const provisionIcons: ProvisionIcons = {
    PET: <MdOutlinePets size={23} />,
    WIFI: <FaWifi size={23} />,
    PARKING: <FaParking size={23} />,
    PACKAGING: <FiPackage size={23} />,
    BABY_CHAIR: <FaBabyCarriage size={23} />,
    WAITING_AREA: <MdOutlineFireplace size={23} />,
    GROUP_MEETING: <HiUserGroup size={23} />,
    PHONE_RESERVATION: <MdOutlinePermPhoneMsg size={23} />,
    DISABLED_PARKING_AREA: <LuParkingSquareOff size={23} />,
    GENDER_SEPARATED_RESTROOM: <FaRestroom size={23} />,
    WHEELCHAIR_ACCESSIBLE_SEAT: <TbWheelchair size={23} />,
    WHEELCHAIR_ACCESSIBLE_ENTRANCE: <FaWheelchair size={23} />,
  };

  return (
    <div className="flex flex-col border border-gray-400 py-10 px-40">
      <p className="text-zinc-800 text-[40px] font-bold">{items?.restaurantName}</p>
      <div className="text-neutral-400 text-xl font-normal">
        <span className="pr-1">메뉴:</span>
        {items?.restaurantMenu &&
          items.restaurantMenu.map((menuName: string, idx: number) => (
            <span key={idx} className="pr-1">
              {menuName}
            </span>
          ))}
      </div>
      <div className="mt-10 grid grid-cols-2">
        <div className="flex flex-col gap-3">
          <p className="text-black text-[22px] font-bold">상세정보</p>
          <p className="flex gap-1 text-zinc-800 text-xl font-normal">
            <CiLocationOn size={23} />
            {items?.restaurantAddress}
          </p>
          <p className="flex gap-1 text-blue-900 text-xl font-normal">
            <CiClock2 size={23} />
            {items?.businessStatus}
          </p>
          <p className="flex gap-1 text-zinc-800 text-xl font-normal">
            <CiPhone size={23} />0{items?.restaurantContactNumber}
          </p>
          <div className="grid grid-cols-6 w-[30%]">
            {items?.provision &&
              items.provision.map((provisionName: string, idx: number) => (
                <div key={idx}>{provisionIcons[provisionName]}</div>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-black text-[22px] font-bold">영업시간</p>
          <p className="text-zinc-800 text-xl font-normal">
            월 {items?.businessTime?.MONDAY.businessTime} ({items?.businessTime?.MONDAY.breakTime})
          </p>
          <p className="text-zinc-800 text-xl font-normal">
            화 {items?.businessTime?.TUESDAY.businessTime} ({items?.businessTime?.TUESDAY.breakTime}
            )
          </p>
          <p className="text-zinc-800 text-xl font-normal">
            수 {items?.businessTime?.WEDNESDAY.businessTime} (
            {items?.businessTime?.WEDNESDAY.breakTime})
          </p>
          <p className="text-zinc-800 text-xl font-normal">
            목 {items?.businessTime?.THURSDAY.businessTime} (
            {items?.businessTime?.THURSDAY.breakTime})
          </p>
          <p className="text-zinc-800 text-xl font-normal">
            금 {items?.businessTime?.FRIDAY.businessTime} ({items?.businessTime?.FRIDAY.breakTime})
          </p>
          <p className="text-zinc-800 text-xl font-normal">
            토 {items?.businessTime?.SATURDAY.businessTime} (
            {items?.businessTime?.SATURDAY.breakTime})
          </p>
          <p className="text-zinc-800 text-xl font-normal">
            일 {items?.businessTime?.SUNDAY.businessTime} ({items?.businessTime?.SUNDAY.breakTime})
          </p>
          <p className="text-red-500 text-xl font-normal">* {items?.businessTime?.etc}</p>
        </div>
      </div>
    </div>
  );
}
