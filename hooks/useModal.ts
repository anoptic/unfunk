import { useState } from 'react';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen((open) => !open);
  };

  return {
    modalOpen,
    showModal,
  };
};

export default useModal;
