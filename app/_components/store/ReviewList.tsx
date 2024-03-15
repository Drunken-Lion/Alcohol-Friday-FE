import React from 'react';
import ReviewItem from './ReviewItem';

export default function ReviewList() {
  return (
    <div>
      <ReviewItem
        nickname="nick"
        reviewPoint="4.0"
        orderDate="2024.03.16"
        reviewContent="알콜향이 강하지 않고 소중한 사람들과 함께 하는 자리에서 마시기 딱 좋았어요 ㅎㅎ"
        image="/images/alcohol.png"
      />
    </div>
  );
}
