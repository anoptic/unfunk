import useModal from '../../hooks/useModal';
import styles from './header.module.css';
import Cart from './cart';
import Bag from './bag';
import Hamburger from './hamburger';
import Logo from './logo';
import MobileModal from '../nav/mobile-modal';
import MobileNav from '../nav/mobile-nav';

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
