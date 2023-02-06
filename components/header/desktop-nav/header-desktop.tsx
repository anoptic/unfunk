import Link from 'next/link';
import styles from './header-desktop.module.css';
import Logo from '../logo';
import DesktopNav from './desktop-nav';

const HeaderDesktop = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo} aria-label="unfunk logo">
          <Link href="/" legacyBehavior>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <DesktopNav />
      </div>
    </>
  );
};

export default HeaderDesktop;
