import React from 'react';
import ReviewItem from './ReviewItem';
import Loading from 'app/loading';
import NotFound from 'app/not-found';
import useStore from 'app/_hooks/useStore';

export default function ReviewList({ id }: { id: number }) {
  const { productReviews } = useStore();

  const { isLoading, isError, items } = productReviews(id);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <NotFound />;
  }

  return (
    <div>
      {items?.data.map((item) => (
        <ReviewItem
          nickname={item.nickname}
          reviewPoint={item.score}
          orderDate={item.createdAt}
          reviewContent={item.content}
          image={item?.files?.file[0]}
        />
      ))}
    </div>
  );
}
