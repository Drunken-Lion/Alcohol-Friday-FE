'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductList, getProductDetail } from 'app/_service/store';
import { useState } from 'react';

export default function useStore() {
  const fetchProducts = () => {
    return getProductList({ size: 12 });
  };

  const [keyWord, setKeyWord] = useState<string>(''); // Define keyWord state

  const fetchSearchProducts = () => {
    return getProductList({ size: 12, keyWord });
  };

  const id: number = 2;

  const fetchProductDetail = () => {
    return getProductDetail(id);
  };

  const getStoreItem = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const getSearchList = useQuery({
    queryKey: ['search', keyWord || ''],
    queryFn: fetchSearchProducts,
  });

  const productDetail = useQuery({
    queryKey: ['productDetail'],
    queryFn: fetchProductDetail,
  });

  return { getStoreItem, getSearchList, setKeyWord, productDetail };
}
