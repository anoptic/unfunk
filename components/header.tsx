import useModal from '../hooks/useModal';
import styles from '../styles/header.module.css';
import Cart from './cart';
import Bag from './header/bag';
import Hamburger from './header/hamburger';
import Logo from './header/logo';
import MobileModal from './mobile-modal';
import MobileNav from './mobile-nav';

const Header = () => {
  const { modal, showModal } = useModal();

  return (
    <>
      <div className={styles.header}>
        <Hamburger modal={modal} showModal={showModal} />
        <div className={styles.logo}>
          <Logo />
        </div>
        <Bag modal={modal} showModal={showModal} />
      </div>
      <hr />

      <MobileModal modal={modal}>
        {modal === 'menu' && <MobileNav />}
        {modal === 'cart' && <Cart />}
      </MobileModal>
    </>
  );
};

export default Header;
