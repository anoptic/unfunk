import { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styles from './alert.module.css';

interface AlertProps {
  open: boolean;
  closeAlert: () => void;
  children: ReactNode;
}

const Alert = ({ open, closeAlert, children }: AlertProps) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={closeAlert}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Description>{children}</AlertDialog.Description>
          <AlertDialog.Cancel asChild className={styles.cancel}>
            <button className="button" type="button">
              OK
            </button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Alert;
