import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ProductIdData, QuantityData } from 'app/_types/cart';

export const useProductId = create(
  persist<ProductIdData>(
    (set) => ({
      productId: 0,
      setProductId: (productId: number) => set({ productId }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useQuantity = create(
  persist<QuantityData>(
    (set) => ({
      quantity: [],
      setQuantity: (quantity: number[]) => set({ quantity }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
