import useModal from '../../hooks/useModal';
import styles from './header-desktop.module.css';
import Cart from './cart';
import Bag, { MenuProps } from './bag';
import Logo from './logo';
import Modal from '../nav/modal';
import DesktopNav from '../nav/desktop-nav';
import ShoesNav from './shoes-nav';
import BlogNav from './blog-nav';
import About from './about';

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
