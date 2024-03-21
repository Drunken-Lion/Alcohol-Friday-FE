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

export async function getCartsList() {
  const res = await serverInstance.get('/v1/carts');
  console.log(res);
  return res.data;
}

export async function addCartItem(itemId: number, quantity: number) {
  try {
    return await serverInstance.post('/v1/carts', {
      cartRequestList: [
        {
          itemId: itemId,
          quantity: quantity,
        },
      ],
    });
  } catch (error) {
    console.error('error:', error);
  }
}

export async function editQuantity(itemId: number, quantity: number) {
  try {
    return await serverInstance.put('/v1/carts', {
      itemId: itemId,
      quantity: quantity,
    });
  } catch (error) {
    console.error('error:', error);
  }
}

export async function deleteCartItem(itemId: number) {
  try {
    return await serverInstance.delete('/v1/carts', {
      data: {
        cartDeleteReqList: [
          {
            itemId: itemId,
          },
        ],
      },
    });
  } catch (error) {
    console.error('error:', error);
  }
}
