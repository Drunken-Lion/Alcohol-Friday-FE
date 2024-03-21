import dayjs from 'dayjs';

export const dateFormat = (date: string, format: string) => {
  return dayjs(date).format(format);
};

export const getOrderStatus = (status: string) => {
  let result = '';
  switch (status) {
    case 'ORDER_RECEIVED':
      result = '주문 접수';
      break;
    case 'PAYMENT_COMPLETED':
      result = '결제 완료';
      break;
    case 'READY_FOR_SHIPMENT':
      result = '배송 준비';
      break;
    case 'SHIPPED':
      result = '배송 중';
      break;
    case 'DELIVERED':
      result = '배송 완료';
      break;
    case 'CANCELLED':
      result = '주문 취소';
      break;
    case 'REFUND_PROCESSING':
      result = '환불 처리';
      break;
    case 'REFUND_COMPLETED':
      result = '환불 완료';
      break;
    case 'ISSUE_DETECTED':
      result = '문제 발생';
      break;
  }
  return result;
};
