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
  files: string[];
  itemRating: { itemId: number; avgItemScore: number; totalReviewCount: number };
  pageInfo?: { size: number; count: number };
};

export type ProductReviewResponseData = {
  data: [
    {
      id: number;
      nickname: string;
      content: string;
      score: number;
      createdAt: string;
      files: { file: string[] };
    },
  ];
};
