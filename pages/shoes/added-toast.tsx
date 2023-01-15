import * as Toast from '@radix-ui/react-toast';
import styles from './added-toast.module.css';

interface AddedToastProps {
  open: boolean;
  closeToast: () => void;
}

const AddedToast = ({ open, closeToast }: AddedToastProps) => {
  // console.log(props);

  return (
    <>
      <Toast.Root
        open={open}
        onOpenChange={closeToast}
        className={styles.root}
        duration={2000}
      >
        <Toast.Description className={styles.desc}>
          Item has been added to your shopping cart!
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

export default AddedToast;
