import styles from './header-mobile.module.css';
import Hamburger from './hamburger';
import Logo from '../logo';

export interface MenuProps {
  modalOpen: boolean;
  showModal: () => void;
}

const HeaderMobile = ({ modalOpen, showModal }: MenuProps) => {
  return (
    <>
      <div className={styles.header}>
        <Hamburger modalOpen={modalOpen} showModal={showModal} />
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
