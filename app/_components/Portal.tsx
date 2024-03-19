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

  return (
    <div>
      <div className={className} onClick={() => setShowModal(true)}>
        {portalName}
      </div>
      {showModal &&
        createPortal(
          <>
            <div className="fixed left-0 top-0 z-20 h-full w-full bg-slate-600 bg-opacity-70" />
            <Modal onClose={() => setShowModal(false)} />
          </>,
          document.body.appendChild(document.createElement('div')),
        )}
    </div>
  );
}
