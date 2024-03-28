import serverInstance from './axios-server';
import { OrderRequestData } from 'app/_types/order';

export async function orderReception(orderRequestProps: OrderRequestData) {
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
