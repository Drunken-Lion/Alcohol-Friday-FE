import serverInstance from './axios-server';

type StoreListApi = {
  size: number;
  keyWord?: string;
  keywordType?: string;
};

export async function getProductList(params: StoreListApi) {
  const res = await serverInstance.get(
    `/v1/items?size=${params.size}&keyword=${params.keyWord}&keywordType=${params.keywordType}`,
  );
  console.log(res);
  return res.data;
}

type ProductItem = {
  id: number;
  name: string;
  price: number;
  category: { firstName: string; lastName: string };
  files: string[];
  itemRating: { itemId: number; avgItemScore: number; totalReviewCount: number };
};

export async function getProductDetail(id: number): Promise<ProductItem> {
  const res = await serverInstance.get(`/v1/items/${id}`);
  console.log(res);
  return res.data;
}
