import { Modal } from '../../hooks/useModal';
import ShoppingBag from './shopping-bag';
import styles from './bag.module.css';

export interface MenuProps {
  modalOpen: Modal;
  showModal: (v: Modal) => void;
}

const Bag = ({ modalOpen, showModal }: MenuProps) => {
  return (
    <>
      <button
        className={styles.bag}
        type="button"
        onClick={() => showModal(modalOpen === 'cart' ? null : 'cart')}
      >
        <span>
          <ShoppingBag />
        </span>
      </button>
    </>
  );
};

export default Bag;
