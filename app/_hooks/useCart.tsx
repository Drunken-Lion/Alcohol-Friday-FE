import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCartItem, deleteCartItem, editQuantity, getCartsList } from 'app/_service/cart';
import { CartRequestProp } from 'app/_types/cart';

export default function useCart() {
  const queryClient = useQueryClient();

  const fetchCartList = () => {
    return getCartsList();
  };

  const cartList = useQuery({
    queryKey: ['carts'],
    queryFn: fetchCartList,
  });

  const addCart = useMutation({
    mutationFn: (cartRequestProp: CartRequestProp) => {
      const { itemId, quantity } = cartRequestProp;
      return addCartItem(itemId, quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts'] });
    },
  });

  const editCartQuantity = useMutation({
    mutationFn: (cartRequestProp: CartRequestProp) => {
      const { itemId, quantity } = cartRequestProp;
      return editQuantity(itemId, quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts'] });
    },
  });

  const removeCartItem = useMutation({
    mutationFn: (itemId: number) => {
      return deleteCartItem(itemId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts'] });
    },
  });

  return { cartList, addCart, editCartQuantity, removeCartItem };
}
