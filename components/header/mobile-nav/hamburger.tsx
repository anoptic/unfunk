import styles from './hamburger.module.css';
import { MenuProps } from './header-mobile';

const Hamburger = ({ modalOpen, showModal }: MenuProps) => {
  return (
    <>
      <button
        className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
          modalOpen ? styles.isActive : ''
        }`}
        type="button"
        onClick={() => {
          showModal();
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
