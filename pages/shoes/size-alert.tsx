import * as AlertDialog from '@radix-ui/react-alert-dialog';
import styles from './size-alert.module.css';

interface SizeAlertProps {
  open: boolean;
  closeAlert: () => void;
}

const SizeAlert = ({ open, closeAlert }: SizeAlertProps) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={closeAlert}>
      {/* <AlertDialog.Trigger /> */}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          {/* <AlertDialog.Title /> */}
          <AlertDialog.Description>
            Please select a size before adding item to cart
          </AlertDialog.Description>
          <AlertDialog.Cancel asChild className={styles.cancel}>
            <button className="button" type="button">
              OK
            </button>
          </AlertDialog.Cancel>
          {/* <AlertDialog.Action /> */}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default SizeAlert;
