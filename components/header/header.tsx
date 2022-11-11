import useMatchMedia from '../../hooks/useMatchmedia';
import useModal from '../../hooks/useModal';
import MobileNav from './mobile-nav/mobile-nav';
import Modal from '../modal';
import About from './desktop-nav/about';
import Bag from './bag';
import BlogNav from './desktop-nav/blog-nav';
import Cart from '../cart/cart';
import HeaderDesktop from './desktop-nav/header-desktop';
import HeaderMobile from './mobile-nav/header-mobile';
import styles from './header.module.css';
import ShoesNav from './desktop-nav/shoes-nav';

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
