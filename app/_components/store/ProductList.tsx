'use client';
import React from 'react';
import ProductItem from './ProductItem';
import Link from 'next/link';
import useStore from 'app/_hooks/useStore';
import NotFound from 'app/not-found';
import Loading from 'app/loading';

type ProductItem = {
  id: number;
  name: string;
  price: number;
  category: { firstName: string; lastName: string };
  files: string[];
  itemRating: { itemId: number; avgItemScore: number; totalReviewCount: number };
  pageInfo: { size: number; count: number };
};

export default function ProductList() {
  const {
    getStoreItem: { isLoading, data: items, isError },
  } = useStore();
  console.log(items);

  if (isError) {
    return <NotFound />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      {items?.data.map((item: ProductItem) => (
        <Link href={`/store/${item.id}`}>
          <ProductItem
            key={item.id}
            image={item.files[0]}
            name={item.name}
            category={item.category.lastName}
            price={item.price}
            reviewPoint={item.itemRating.avgItemScore}
            reviewCount={item.itemRating.totalReviewCount}
          />
        </Link>
      ))}
    </div>
  );
}
