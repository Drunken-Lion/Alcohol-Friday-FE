import serverInstance from './axios-server';
import {
  ProductListRequestData,
  ProductItemResponseData,
  ProductReviewResponseData,
} from 'app/_types/store';

export async function getProductList(params: ProductListRequestData) {
  const res = await serverInstance.get(
    `/v1/items?page=${params.page}&keyword=${params.keyWord}&categories=${params.categories}`,
  );
  if (res.status !== 200) {
    throw new Error(`Failed to fetch product list: ${res.statusText}`);
  }

  return res.data;
}

export async function getProductDetail(id: number): Promise<ProductItemResponseData> {
  const res = await serverInstance.get(`/v1/items/${id}`);
  if (res.status !== 200) {
    throw new Error(`Failed to fetch product detail: ${res.statusText}`);
  }

  return res.data;
}

export async function getProductReviews(id: number): Promise<ProductReviewResponseData> {
  const res = await serverInstance.get(`/v1/items/${id}/reviews`);
  if (res.status !== 200) {
    throw new Error(`Failed to fetch product reviews: ${res.statusText}`);
  }

  return res.data;
}
