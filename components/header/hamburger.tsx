import { Modal } from '../../hooks/useModal';
import styles from './hamburger.module.css';

interface HamburgerProps {
  modal: Modal;
  showModal: (v: Modal) => void;
}

const Hamburger = ({ modal, showModal }: HamburgerProps) => {
  return (
    <>
      <button
        className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
          modal === 'menu' ? styles.isActive : ''
        }`}
        type="button"
        onClick={() => showModal(modal === 'menu' ? null : 'menu')}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    </>
  );
};

export default Hamburger;
