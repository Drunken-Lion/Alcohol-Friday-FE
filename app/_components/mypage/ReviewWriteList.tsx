'use client';

import React, { useEffect, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import clientInstance from 'app/_service/axios-client';
import OrderItem from '../OrderItem';
import TabButton from '../TabButton';
import Pagination from '../Pagination';
import ReviewCompleteList from './ReviewCompleteList';
import { Reviews, ReviewsUnwritten } from 'app/_types/mypage/review';

export default function ReviewWriteList() {
  const [tabName, setTabName] = useState('리뷰작성');
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [limitPerPage, setLimitPerpage] = useState<number>(10);

  const [reviewsUnwritten, setReviewsUnwritten] = useState<Array<ReviewsUnwritten>>([]);
  const [reviews, setReviews] = useState<Array<Reviews>>([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleClickTab = (buttonName: string) => {
    setTabName(buttonName);
    setPageNum(1);
  };

  const getReviewsUnwritten = async (page = 0, size = 10) => {
    const url = '/v1/members/me/reviews/unwritten';
    const res = await clientInstance.get(url, { params: { page, size } });

    return res.data;
  };

  const getReviews = async (page = 0, size = 10) => {
    const url = '/v1/members/me/reviews';
    const res = await clientInstance.get(url, { params: { page, size } });

    return res.data;
  };

  const { data: reviewsUnwrittenData } = useQuery({
    queryKey: ['get-reviews-unwritten', pageNum - 1, limitPerPage],
    queryFn: () => getReviewsUnwritten(pageNum - 1, limitPerPage),
    placeholderData: keepPreviousData,
    enabled: tabName === '리뷰작성',
  });

  const { data: reviewsData } = useQuery({
    queryKey: ['get-reviews', pageNum - 1, limitPerPage],
    queryFn: () => getReviews(pageNum - 1, limitPerPage),
    placeholderData: keepPreviousData,
    enabled: tabName === '작성한 리뷰',
  });

  useEffect(() => {
    if (tabName === '리뷰작성' && reviewsUnwrittenData) {
      setReviewsUnwritten(reviewsUnwrittenData.data);
      setTotalCount(reviewsUnwrittenData.pageInfo.count);
    } else if (tabName === '작성한 리뷰' && reviewsData) {
      setReviews(reviewsData.data);
      setTotalCount(reviewsData.pageInfo.count);
    }
  }, [reviewsUnwrittenData, reviewsData, tabName]);

  return (
    <>
      <div className="flex flex-col w-9/12 m-auto">
        <div className="flex gap-6 ml-5">
          <TabButton
            onClick={() => handleClickTab('리뷰작성')}
            buttonName="리뷰작성"
            selectedTab={tabName}
            isProductDetail={false}
          />
          <TabButton
            onClick={() => handleClickTab('작성한 리뷰')}
            buttonName="작성한 리뷰"
            selectedTab={tabName}
            isProductDetail={false}
          />
        </div>
        <div className="flex gap-6 flex-wrap ml-5">
          {tabName === '작성한 리뷰' && <ReviewCompleteList reviews={reviews} />}
          {tabName === '리뷰작성' &&
            (reviewsUnwritten.length === 0 ? (
              <div>작성가능한 구매후기가 없어요 !</div>
            ) : (
              reviewsUnwritten.map((review, i) => (
                <React.Fragment key={i}>
                  <div className="border rounded-md border-slate-700 border-opacity-20 p-7 w-[628px]">
                    <OrderItem
                      orderDetailId={review.orderDetailId}
                      title={review.itemName}
                      price={review.itemPrice}
                      quantity={review.quantity}
                      image={review.file?.file[0].path}
                      isReview={true}
                      isReviewComplete={false}
                    />
                  </div>
                  {(i + 1) % 2 === 0 && <div className="w-full" />}
                </React.Fragment>
              ))
            ))}
        </div>
      </div>
      <Pagination
        totalCount={totalCount}
        pageRangeDisplayed={pageRangeDisplayed}
        page={pageNum}
        setPage={setPageNum}
      />
    </>
  );
}
