import { Modal } from '../../hooks/useModal';
import ShoppingBag from './shopping-bag';
import styles from './bag.module.css';

interface BagProps {
  modal: Modal;
  showModal: (v: Modal) => void;
}

const Bag = ({ modal, showModal }: BagProps) => {
  return (
    <>
      <button
        className={styles.bag}
        type="button"
        onClick={() => showModal(modal === 'cart' ? null : 'cart')}
      >
        <span>
          <ShoppingBag />
        </span>
      </button>
    </>
  );
};

export default Bag;
