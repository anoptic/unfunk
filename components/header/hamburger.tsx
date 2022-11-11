import { Modal } from '../../hooks/useModal';
import styles from './hamburger.module.css';

interface HamburgerProps {
  modalOpen: Modal;
  showModal: (v: Modal) => void;
}

const Hamburger = ({ modalOpen, showModal }: HamburgerProps) => {
  return (
    <>
      <button
        className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
          modalOpen === 'menu' ? styles.isActive : ''
        }`}
        type="button"
        onClick={() => showModal(modalOpen === 'menu' ? null : 'menu')}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    </>
  );
};

export default Hamburger;
