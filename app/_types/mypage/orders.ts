import { FileInfo } from './review';

export type Orders = {
  id: number;
  orderNo: string;
  orderStatus: string;
  price: number;
  deliveryPrice: number;
  totalPrice: number;
  recipient: string;
  phone: number;
  postcode: string;
  address: string;
  addressDetail: string;
  description: string;
  createdAt: string;
  orderDetails: OrderDetail[];
};

type OrderDetail = {
  id: number;
  name: string;
  quantity: number;
  totalPrice: number;
  file?: FileInfo;
};
