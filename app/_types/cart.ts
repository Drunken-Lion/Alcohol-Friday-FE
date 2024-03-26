export type CartRequestData = {
  itemId: number;
  quantity: number;
};

export interface CartItemProps {
  itemId: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export type CartItemData = {
  item: {
    name: string;
    price: number;
    file: string;
    id: number;
  };
  quantity: number;
};

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
