// import { Modal } from '../../hooks/useModal';
// import { ModalHook } from '../modal';
import ShoppingBag from './shopping-bag';
import styles from './bag.module.css';
import Link from 'next/link';
// import { ModalContents } from './header';

// export interface MenuProps {
//   showModal: () => void;
//   setModalContents: (v: ModalContents) => void;
// }

const Bag = () => {
  return (
    <Link href="/cart">
      <button className={styles.bag} type="button">
        <span>
          <ShoppingBag />
        </span>
      </button>
    </Link>
  );
};

export default Bag;
