import { CartRequestProp } from 'app/_types/cart';
import serverInstance from './axios-server';

export async function orderReception(orderRequestProps: CartRequestProp[]) {
  const orderItemList = orderRequestProps.map(({ itemId, quantity }) => ({
    itemId,
    quantity,
  }));
  console.log(orderItemList);
  try {
    return await serverInstance.post('/v1/orders', {
      orderItemList,
    });
  } catch (error) {
    console.error('error:', error);
  }
}
