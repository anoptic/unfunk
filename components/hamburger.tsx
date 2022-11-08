import styles from '../styles/hamburger.module.css';

interface HamburgerProps {
  isVisible: boolean;
  // handleHamburgerClick: () => void;
  toggleModal: () => void;
}

const Hamburger = ({ isVisible, toggleModal }: HamburgerProps) => {
  return (
    <>
      <button
        className={`${styles.hamburger} ${styles.hamburgerSqueeze} ${
          isVisible ? styles.isActive : ''
        }`}
        type="button"
        onClick={toggleModal}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    </>
  );
};

export default Hamburger;
