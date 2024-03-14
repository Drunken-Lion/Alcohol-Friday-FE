import React from 'react';
import ProductItem from './ProductItem';
import Link from 'next/link';

export default function ProductList() {
  const test = 1;
  return (
    <div className="grid grid-cols-4 gap-6 mx-36">
      <Link href={`/store/${test}`}>
        <ProductItem
          image="../images/alcohol.png"
          name="북한강"
          category="증류수"
          price="10,000"
          discountRate={20}
          discountPrice="8,000"
          reviewPoint={4.5}
          reviewCount={125}
        />
      </Link>
      <ProductItem
        image="../images/alcohol.png"
        name="북한강"
        category="증류수"
        price="10,000"
        discountRate={20}
        discountPrice="8,000"
        reviewPoint={4.5}
        reviewCount={125}
      />
      <ProductItem
        image="../images/alcohol.png"
        name="북한강"
        category="증류수"
        price="10,000"
        discountRate={20}
        discountPrice="8,000"
        reviewPoint={4.5}
        reviewCount={125}
      />
      <ProductItem
        image="../images/alcohol.png"
        name="북한강"
        category="증류수"
        price="10,000"
        discountRate={20}
        discountPrice="8,000"
        reviewPoint={4.5}
        reviewCount={125}
      />
      <ProductItem
        image="../images/alcohol.png"
        name="북한강"
        category="증류수"
        price="10,000"
        discountRate={20}
        discountPrice="8,000"
        reviewPoint={4.5}
        reviewCount={125}
      />
    </div>
  );
}
