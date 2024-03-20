'use client';

import React, { useState } from 'react';
import CategoryButton from 'app/_components/store/CategoryButton';
import ProductList from 'app/_components/store/ProductList';
import Search from 'app/_components/Search';
import Pagination from 'app/_components/Pagination';

export default function Store() {
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);

  return (
    <div className="mx-36 mt-16">
      <Search />
      <CategoryButton />
      <ProductList />
      <Pagination
        totalCount={5}
        pageRangeDisplayed={pageRangeDisplayed}
        page={1}
        setPage={setPageNum}
      />
    </div>
  );
}
