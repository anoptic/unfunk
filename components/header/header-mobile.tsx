import useModal from '../../hooks/useModal';
import styles from './header-mobile.module.css';
import Cart from './cart';
import { MenuProps } from './bag';
import Hamburger from './hamburger';
import Logo from './logo';
import Modal from '../nav/modal';
import MobileNav from '../nav/mobile-nav';

const HeaderMobile = ({ modalOpen, showModal }: MenuProps) => {
  // const { modalOpen, showModal } = useModal();

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
