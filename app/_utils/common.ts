import dayjs from 'dayjs';

/**
 * 날짜 변환 함수
 * @param date 날짜
 * @param format 포맷 형식
 * @returns 변환된 날짜 형식
 */
export const dateFormat = (date: string, format: string) => {
  return dayjs(date).format(format);
};

/**
 * 주문상태 (영문)에 따른 한글명 및 버튼명
 * @param status 주문상태 (영문)
 * @returns [주문상태 (한글), 사용자가 가능한 행동]
 */
export const getOrderStatus = (status: string) => {
  let result: string[] = ['', ''];
  switch (status) {
    case 'ORDER_RECEIVED':
      result = ['주문 접수', '주문 취소'];
      break;
    case 'PAYMENT_COMPLETED':
      result = ['결제 완료', '주문 취소'];
      break;
    case 'READY_FOR_SHIPMENT':
      result = ['배송 준비', '주문 취소'];
      break;
    case 'SHIPPED':
      result = ['배송 중', '환불 요청'];
      break;
    case 'DELIVERED':
      result = ['배송 완료', '환불 요청'];
      break;
    case 'CANCELLED':
      result = ['주문 취소', ''];
      break;
    case 'REFUND_PROCESSING':
      result = ['환불 처리', ''];
      break;
    case 'REFUND_COMPLETED':
      result = ['환불 완료', ''];
      break;
    case 'ISSUE_DETECTED':
      result = ['문제 발생', ''];
      break;
  }
  return result;
};
