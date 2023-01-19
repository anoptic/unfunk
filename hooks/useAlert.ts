import { useState } from 'react';

const useAlert = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  const openAlert = () => {
    setAlertOpen(true);
  };

  const closeAlert = () => {
    setAlertOpen(false);
  };

  return { alertOpen, openAlert, closeAlert };
};

export default useAlert;
