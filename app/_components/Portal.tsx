'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import { PortalProps } from 'app/_types/common';

export default function Portal({
  orderDetailId,
  image,
  title,
  price,
  quantity,
  portalName,
  className,
}: PortalProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className={className} onClick={() => setShowModal(true)}>
        {portalName}
      </div>
      {showModal &&
        createPortal(
          <>
            <div className="fixed left-0 top-0 z-20 h-full w-full bg-slate-600 bg-opacity-70" />
            <Modal
              onClose={() => setShowModal(false)}
              orderDetailId={orderDetailId}
              image={image}
              title={title}
              price={price}
              quantity={quantity}
            />
          </>,
          document.body.appendChild(document.createElement('div')),
        )}
    </div>
  );
}
