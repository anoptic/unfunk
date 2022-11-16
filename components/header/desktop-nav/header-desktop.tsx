import styles from './header-desktop.module.css';
import Logo from '../logo';
import DesktopNav from './desktop-nav';

const HeaderDesktop = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <DesktopNav />
      </div>
    </>
  );
};

export default HeaderDesktop;
