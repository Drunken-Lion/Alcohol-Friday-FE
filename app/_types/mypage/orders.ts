import { FileInfo } from './review';

export interface Orders {
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
}

export interface OrderDetail {
  id: number;
  name: string;
  quantity: number;
  totalPrice: number;
  file?: FileInfo;
}
