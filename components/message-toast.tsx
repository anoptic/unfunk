import { ReactNode } from 'react';
import * as Toast from '@radix-ui/react-toast';
import styles from './message-toast.module.css';

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
        duration={2000}
      >
        <Toast.Description className={styles.desc}>
          {/* Item has been added to your shopping cart! */}
          {children}
        </Toast.Description>
        {/* <Toast.Close asChild className={styles.close}>
          <button className="button" type="button">
            OK
          </button>
        </Toast.Close> */}
      </Toast.Root>
      <Toast.Viewport className={styles.viewport} />
    </>
  );
};

export default MessageToast;
