import React from 'react';
import Link from 'next/link';
import ProductItem from './ProductItem';
import { ProductItemResponseData } from 'app/_types/store';

export default function ProductList({ items }: { items: ProductItemResponseData[] }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {items?.map((item: ProductItemResponseData) => (
        <Link key={item.id} href={`/store/${item.id}`}>
          <ProductItem
            image={item.files?.file[0]?.path}
            name={item.name}
            category={item.category.lastName}
            price={item.price}
            reviewPoint={item.itemRating?.avgItemScore}
            reviewCount={item.itemRating?.totalReviewCount}
          />
        </Link>
      ))}
    </div>
  );
}
