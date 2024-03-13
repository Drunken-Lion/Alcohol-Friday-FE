import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-6 mx-36">
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
