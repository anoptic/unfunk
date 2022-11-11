import styles from './header-mobile.module.css';
import { MenuProps } from '../bag';
import Hamburger from './hamburger';
import Logo from '../logo';

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
