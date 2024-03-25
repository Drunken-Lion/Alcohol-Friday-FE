export type CartRequestProp = {
  itemId: number;
  quantity: number;
};

export type CartItem = {
  item: {
    name: string;
    price: number;
    file: string;
    id: number;
  };
  quantity: number;
};

export interface OrderItemProps {
  itemId: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  isValue?: Boolean;
  onClick?: () => void;
  cartCheck?: Boolean;
  orderCheck?: Boolean;
}

export interface CartBillProps {
  productPrice: number;
  deliveryFee: string;
  totalPrice: number;
}

export interface ProductIdData {
  productId: number;
  setProductId: (productId: number) => void;
}

export interface QuantityData {
  quantity: number[];
  setQuantity: (quantity: number[]) => void;
}
