import useMatchMedia from '../../hooks/useMatchmedia';
import useModal from '../../hooks/useModal';
import MobileNav from '../nav/mobile-nav';
import Modal from '../nav/modal';
import About from './about';
import Bag from './bag';
import BlogNav from './blog-nav';
import Cart from './cart';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';
import styles from './header.module.css';
import ShoesNav from './shoes-nav';

const Header = () => {
  const { modalOpen, showModal } = useModal();
  const mobileMatches = useMatchMedia();

  return (
    <>
      <div className={styles.header}>
        {mobileMatches ? (
          <HeaderMobile modalOpen={modalOpen} showModal={showModal} />
        ) : (
          <HeaderDesktop modalOpen={modalOpen} showModal={showModal} />
        )}
        <Bag modalOpen={modalOpen} showModal={showModal} />
      </div>

      <Modal modalOpen={modalOpen} showModal={showModal}>
        {modalOpen === 'cart' && <Cart />}
        {modalOpen === 'menu' && <MobileNav />}
        {modalOpen === 'shoes' && <ShoesNav />}
        {modalOpen === 'blog' && <BlogNav />}
        {modalOpen === 'about' && <About />}
      </Modal>
    </>
  );
};

export default Header;
