export type ProductListRequestData = {
  keyWord?: string;
  categories?: string;
  page?: number;
};

export type ProductItemResponseData = {
  id: number;
  name: string;
  price: number;
  category: { firstName: string; lastName: string };
  files: { file: [{ keyname: string; path: string }] };
  itemRating: { itemId: number; avgItemScore: number; totalReviewCount: number };
  pageInfo?: { size: number; count: number };
};

export interface ProductItemProps {
  image: string;
  name: string;
  category: string;
  price: number;
  reviewPoint: number;
  reviewCount: number;
  detailCheck?: boolean;
}

export type ProductReviewResponseData = {
  data: [
    {
      id: number;
      nickname: string;
      content: string;
      score: number;
      createdAt: string;
      files: { file: [{ keyname: string; path: string }] };
    },
  ];
};

export interface QuantityProps {
  quantity: number;
  price: number;
}

export interface ViewDetailProps {
  image: string;
}

export interface ReviewItemProps {
  nickname: string;
  reviewPoint: number;
  orderDate: string;
  reviewContent: string;
  image: string;
}
