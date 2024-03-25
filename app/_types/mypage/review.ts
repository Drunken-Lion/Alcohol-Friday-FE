export type ReviewsUnwritten = {
  orderDetailId: number;
  itemName: string;
  itemPrice: number;
  quantity: number;
  file?: FileInfo;
};

export type FileInfo = {
  file: File[];
  entityId: number;
  entityType: string;
};

type File = {
  seq: number;
  keyName: string;
  path: string;
};

export type Reviews = {
  id: number;
  score: number;
  content: string;
  orderDetail: OrderDetail;
  files?: FileInfo;
};

type OrderDetail = {
  orderDetailId: number;
  itemName: string;
  itemPrice: number;
  quantity: number;
  file?: FileInfo;
};
