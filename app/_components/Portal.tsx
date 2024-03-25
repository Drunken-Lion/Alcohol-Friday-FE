'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import { PortalProps } from 'app/_types/common';

export default function Portal({ portalName, className }: PortalProps) {
  const [showModal, setShowModal] = useState(false);

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
