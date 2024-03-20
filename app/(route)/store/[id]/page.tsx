'use client';
import TabButton from 'app/_components/TabButton';
import HandlingStore from 'app/_components/store/HandlingStore';
import ProductItem from 'app/_components/store/ProductItem';
import Quantity from 'app/_components/store/Quantity';
import ReviewList from 'app/_components/store/ReviewList';
import ViewDetail from 'app/_components/store/ViewDetail';
import useStore from 'app/_hooks/useStore';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import React from 'react';

export default function StoreDetail({ params: { id } }: { params: { id: number } }) {
  console.log(id);

  const {
    productDetail: { isLoading, data: item, isError },
  } = useStore();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }

  console.log(item);

  return (
    <div className="flex flex-col mt-20 mx-36 gap-20">
      <div className="flex gap-20 justify-center">
        {item && (
          <ProductItem
            image="/images/alcohol.png"
            name={item.name}
            category={item.category.lastName}
            price={item.price}
            reviewPoint={item.itemRating.avgItemScore}
            reviewCount={item.itemRating.totalReviewCount}
            detailCheck={true}
          />
        )}
        {item && <Quantity quantity={1} price={item.price} />}
      </div>
      <HandlingStore
        currentAddress="서울 강서구 화곡동 993-15"
        distance="0.3km"
        liquor="매화수"
        store="춘천옥닭갈비"
        sotreAddress="서울 강서구 화곡동 993-15"
      />
      <div className="flex">
        <TabButton
          onClick={undefined}
          buttonName="상품 상세보기"
          className="w-full text-center text-blue-900 text-xl font-bold border-b border-blue-900 cursor-grabbing"
        />
        <TabButton
          onClick={undefined}
          buttonName="상품평"
          className="w-full text-center text-gray-300 text-xl font-normal border-b cursor-grabbing"
        />
      </div>
      <ViewDetail image="/images/detail.png" />
      <ReviewList />
    </div>
  );
}
