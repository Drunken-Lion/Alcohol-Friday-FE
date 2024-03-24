'use client';
import { useQuery } from '@tanstack/react-query';
import { getProductList, getProductDetail, getProductReviews } from 'app/_service/store';

export default function useStore() {
  const fetchProducts = (pageNum: number, keyWord: string, categories: string) => {
    return getProductList({ keyWord: keyWord, categories: categories, page: pageNum });
  };

  const fetchProductDetail = (id: number) => {
    return getProductDetail(id);
  };

  const fetchProductReviews = (id: number) => {
    return getProductReviews(id);
  };

  const getStoreItem = (pageNum: number, keyWord = '', categories = '') => {
    const {
      isLoading,
      isError,
      data: items,
    } = useQuery({
      queryKey: ['products', pageNum - 1, keyWord, categories],
      queryFn: () => fetchProducts(pageNum - 1, keyWord, categories),
    });

    return { isLoading, isError, items };
  };

  const productDetail = (id: number) => {
    const {
      isLoading,
      isError,
      data: item,
    } = useQuery({
      queryKey: ['productDetail', id],
      queryFn: () => fetchProductDetail(id),
    });

    return { isLoading, isError, item };
  };

  const productReviews = (id: number) => {
    const {
      isLoading,
      isError,
      data: items,
    } = useQuery({
      queryKey: ['productReviews', id],
      queryFn: () => fetchProductReviews(id),
    });

    return { isLoading, isError, items };
  };

  return { getStoreItem, productDetail, productReviews };
}
