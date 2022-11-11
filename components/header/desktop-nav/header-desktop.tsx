import styles from './header-desktop.module.css';
import Bag, { MenuProps } from '../bag';
import Logo from '../logo';
import DesktopNav from './desktop-nav';

const HeaderDesktop = ({ modalOpen, showModal }: MenuProps) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <DesktopNav modalOpen={modalOpen} showModal={showModal} />
      </div>
    </>
  );
};

export default HeaderDesktop;
