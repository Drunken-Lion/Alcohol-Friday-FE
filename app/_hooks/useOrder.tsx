import { useMutation, useQueryClient } from '@tanstack/react-query';
import { orderReception } from 'app/_service/order';
import { OrderRequestData } from 'app/_types/order';

export default function useOrder() {
  const queryClient = useQueryClient();

  const addOrder = useMutation({
    mutationFn: (orderRequestProp: OrderRequestData[]) => {
      //   const { itemId, quantity } = orderRequestProp;
      return orderReception(orderRequestProp);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  return { addOrder };
}
