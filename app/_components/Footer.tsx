export default function Footer() {
  return (
    <div className=" bg-zinc-800 text-white max-[640px]:pl-4 sm:pl-40 lg:pl-80 max-[640px]:pb-10 sm:pb-14 lg:pb-20">
      <img src="/images/logo.png" className="py-16 w-28" />
      <div className="text-white text-sm font-normal font-['Inter'] pb-5">
        제작 : Drunken Lion
        <br />
        주소 : 서울특별시 구로구 디지털로 6894
        <br />
        문의 : 02-123-5678
      </div>
      <div className="text-white text-sm font-normal font-['Inter']">
        Copyright©2024 by Drunken Lion all rights reserved.
      </div>
    </div>
  );
}
