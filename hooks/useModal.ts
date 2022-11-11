import { useState } from 'react';

export type Modal =
  | 'menu'
  | 'cart'
  | 'shoes'
  | 'blog'
  | 'about'
  | 'open'
  | null;

const useModal = () => {
  const [modalOpen, setModalOpen] = useState<Modal>(null);

  const showModal = (v: Modal) => {
    setModalOpen((modalOpen) => (modalOpen = v));
  };

  return {
    modalOpen,
    showModal,
  };
};

export default useModal;
