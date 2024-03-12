import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewRatingProps {
  clicked: boolean[];
  onStarClick: (index: number) => void;
}

export default function ReviewRating({ clicked, onStarClick }: ReviewRatingProps) {
  const starArray = [0, 1, 2, 3, 4];

  return (
    <div className="flex">
      <div className="flex flex-row">
        {starArray.map((el) => {
          const starStyles = clicked[el] ? 'text-blue-950' : 'text-slate-300';
          return (
            <FaStar
              fontSize={30}
              key={el}
              id={`${el}`}
              onClick={() => onStarClick(el)}
              className={`${starStyles} cursor-grabbing`}
            />
          );
        })}
      </div>
    </div>
  );
}
