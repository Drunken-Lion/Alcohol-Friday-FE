import React from 'react';

interface ViewDetailProps {
  image: string;
}

export default function ViewDetail({ image }: ViewDetailProps) {
  return (
    <div>
      <img src={image} width={1280} />
    </div>
  );
}
