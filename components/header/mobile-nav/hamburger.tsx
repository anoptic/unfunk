// import { Modal } from '../../hooks/useModal';
import styles from './hamburger.module.css';
import { MenuProps } from './header-mobile';

const Hamburger = ({ modalOpen, showModal, setModalContents }: MenuProps) => {
  return (
    <>
      <button
        className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
          modalOpen ? styles.isActive : ''
        }`}
        type="button"
        onClick={() => {
          showModal();
          setModalContents('menu');
        }}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    </>
  );
};

export default Hamburger;
