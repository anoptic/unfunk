import { Modal } from '../../hooks/useModal';
import ShoppingBag from './shopping-bag';
import styles from '../../styles/bag.module.css';

interface BagProps {
  modal: Modal;
  // isVisible: boolean;
  showModal: (v: Modal) => void;
}

const Bag = ({ modal, showModal }: BagProps) => {
  // console.log(props);

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
