'use client';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

interface PortalProps {
  portalName: string;
  className: string;
}

export default function Portal({ portalName, className }: PortalProps) {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <div>
      <div className={className} onClick={() => setShowModal(true)}>
        {portalName}
      </div>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body.appendChild(document.createElement('div')),
        )}
    </div>
  );
}
