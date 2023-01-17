import { useState } from 'react';

const useToast = () => {
  const [toastOpen, setToastOpen] = useState(false);

  const openToast = () => {
    setToastOpen(true);
  };

  const closeToast = () => {
    setToastOpen(false);
  };

  return { toastOpen, openToast, closeToast };
};

export default useToast;
