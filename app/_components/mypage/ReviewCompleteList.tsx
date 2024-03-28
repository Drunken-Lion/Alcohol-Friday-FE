import React from 'react';

import OrderItem from '../OrderItem';

import { Reviews } from 'app/_types/mypage/review';

type Props = {
  reviews: Reviews[];
};

export default function ReviewCompleteList({ reviews }: Props) {
  return reviews.length === 0 ? (
    <div>작성한 리뷰가 없어요 !</div>
  ) : (
    reviews.map((review, i: number) => (
      <React.Fragment key={i}>
        <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-[628px]">
          <OrderItem
            orderDetailId={review.orderDetail.orderDetailId}
            title={review.orderDetail.itemName}
            price={review.orderDetail.itemPrice}
            quantity={review.orderDetail.quantity}
            score={review.score}
            image={review.orderDetail.file?.file[0].path}
            isReview={true}
            isReviewComplete={true}
            reviewText={review.content}
          />
        </div>
        {(i + 1) % 2 === 0 && <div className="w-full" />}
      </React.Fragment>
    ))
  );
}
