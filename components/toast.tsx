import { ReactNode } from 'react';
import * as Toast from '@radix-ui/react-toast';
import styles from './toast.module.css';

interface ToastProps {
  open: boolean;
  closeToast: () => void;
  children: ReactNode;
}

const MessageToast = ({ open, closeToast, children }: ToastProps) => {
  return (
    <>
      <Toast.Root
        open={open}
        onOpenChange={closeToast}
        className={styles.root}
        duration={3000}
      >
        <Toast.Description className={styles.desc}>
          {children}
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className={styles.viewport} />
    </>
  );
};

export default MessageToast;
