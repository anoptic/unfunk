import { useState } from 'react';

export type Modal = 'menu' | 'cart' | null;

const useModal = () => {
  const [modal, setModal] = useState<Modal>(null);

  const showModal = (v: Modal) => {
    setModal((modal) => (modal = v));
  };

  return {
    modal,
    showModal,
  };
};

export default useModal;
