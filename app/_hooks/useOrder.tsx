import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orderReception } from 'app/_service/order';
import { CartRequestProp } from 'app/_types/cart';
import { OrderRequestProp } from 'app/_types/order';

export default function useOrder() {
  const queryClient = useQueryClient();

  const addOrder = useMutation({
    mutationFn: (orderRequestProp: CartRequestProp[]) => {
      //   const { itemId, quantity } = orderRequestProp;
      return orderReception(orderRequestProp);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  return { addOrder };
}
