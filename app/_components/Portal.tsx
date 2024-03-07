import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <>
      <button onClick={() => setShowModal(true)}>show modal</button>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body.appendChild(document.createElement('div')),
        )}
    </>
  );
}
