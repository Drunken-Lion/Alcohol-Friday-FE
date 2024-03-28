'use client';

import React, { useState } from 'react';
import useStore from 'app/_hooks/useStore';
import CategoryButton from 'app/_components/store/CategoryButton';
import ProductList from 'app/_components/store/ProductList';
import Search from 'app/_components/Search';
import Pagination from 'app/_components/Pagination';
import { useCategoriesStore, useSearchStore } from 'app/_stores/store';

export default function Store() {
  const [pageNum, setPageNum] = useState<number>(1);
  const { keyword } = useSearchStore();
  const { category } = useCategoriesStore();

  const { getStoreItem } = useStore();
  const { items } = getStoreItem(pageNum, keyword, category);
  const item = items?.data;

  return (
    <div className="mx-36 mt-16 h-full">
      <Search />
      <CategoryButton />
      <ProductList items={item} />
      {items && (
        <Pagination
          totalCount={items?.pageInfo.count}
          pageRangeDisplayed={10}
          page={pageNum}
          setPage={setPageNum}
        />
      )}
    </div>
  );
}
