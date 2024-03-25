import React from 'react';
import { ViewDetailProps } from 'app/_types/store';

export default function ViewDetail({ image }: ViewDetailProps) {
  return (
    <div className="flex justify-center">
      <img src={image} width={1280} />
    </div>
  );
}
