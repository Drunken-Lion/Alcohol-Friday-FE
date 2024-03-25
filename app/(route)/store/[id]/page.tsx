'use client';

import React, { useEffect, useState } from 'react';
import TabButton from 'app/_components/TabButton';
import HandlingStore from 'app/_components/store/HandlingStore';
import ProductItem from 'app/_components/store/ProductItem';
import Quantity from 'app/_components/store/Quantity';
import ReviewList from 'app/_components/store/ReviewList';
import ViewDetail from 'app/_components/store/ViewDetail';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import useStore from 'app/_hooks/useStore';
import { useProductId } from 'app/_stores/cart';

export default function StoreDetail({ params: { id } }: { params: { id: number } }) {
  const { setProductId } = useProductId();
  const { productDetail } = useStore();
  const { isLoading, isError, item } = productDetail(id);

  const [selectedTab, setSelectedTab] = useState<string>('viewDetail');

  useEffect(() => {
    setProductId(id);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <NotFound />;
  }

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
          onClick={() => setSelectedTab('viewDetail')}
          buttonName="상품 상세보기"
          isActive={selectedTab === 'viewDetail'}
          className="w-full text-center text-xl cursor-grabbing"
        />
        <TabButton
          onClick={() => setSelectedTab('review')}
          buttonName="상품평"
          isActive={selectedTab === 'review'}
          className="w-full text-center text-xl cursor-grabbing"
        />
      </div>
      {selectedTab === 'viewDetail' && <ViewDetail image="/images/detail.png" />}
      {selectedTab === 'review' && item && <ReviewList id={item.id} />}
    </div>
  );
}
