import { ReviewRatingProps } from 'app/_types/common';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function ReviewRating({ clicked, onStarClick, isShow }: ReviewRatingProps) {
  const starArray = [0, 1, 2, 3, 4];

  return (
    <div className="flex">
      {isShow ? (
        <div className="flex flex-row">
          {starArray.map((idx) => {
            const starStyles = clicked[idx] ? 'text-blue-950' : 'text-slate-300';
            return <FaStar fontSize={20} key={idx} id={`${idx}`} className={`${starStyles}`} />;
          })}
        </div>
      ) : (
        <div className="flex flex-row">
          {starArray.map((idx) => {
            const starStyles = clicked[idx] ? 'text-blue-950' : 'text-slate-300';
            return (
              <FaStar
                fontSize={30}
                key={idx}
                id={`${idx}`}
                onClick={() => onStarClick && onStarClick(idx)}
                className={`${starStyles} cursor-grabbing`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
