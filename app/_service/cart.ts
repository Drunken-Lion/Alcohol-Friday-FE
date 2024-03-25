import serverInstance from './axios-server';

export async function getCartsList() {
  const res = await serverInstance.get('/v1/carts');
  if (res.status !== 200) {
    throw new Error(`Failed to fetch carts list: ${res.statusText}`);
  }

  return res.data;
}

export async function addCartItem(itemId: number, quantity: number) {
  try {
    return await serverInstance.post('/v1/carts', {
      cartRequestList: [
        {
          itemId: itemId,
          quantity: quantity,
        },
      ],
    });
  } catch (error) {
    console.error('error:', error);
  }
}

export async function editQuantity(itemId: number, quantity: number) {
  try {
    return await serverInstance.put('/v1/carts', {
      itemId: itemId,
      quantity: quantity,
    });
  } catch (error) {
    console.error('error:', error);
  }
}

export async function deleteCartItem(itemId: number) {
  try {
    return await serverInstance.delete('/v1/carts', {
      data: {
        cartDeleteReqList: [
          {
            itemId: itemId,
          },
        ],
      },
    });
  } catch (error) {
    console.error('error:', error);
  }
}
