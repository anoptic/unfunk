import { useState } from 'react';
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

export type ModalContents = 'menu' | 'shoes' | 'blog' | 'about' | null;

const Header = () => {
  const { modalOpen, showModal } = useModal();
  const [modalContents, setModalContents] = useState<ModalContents>(null);
  const mobileMatches = useMatchMedia();

  return (
    <>
      <div className={styles.header}>
        {mobileMatches ? (
          <HeaderMobile
            modalOpen={modalOpen}
            showModal={showModal}
            setModalContents={setModalContents}
          />
        ) : (
          <HeaderDesktop />
        )}
        <Bag />
      </div>

      <Modal modalOpen={modalOpen} showModal={showModal}>
        {/* {modalContents === 'cart' && <Cart />} */}
        {modalContents === 'menu' && <MobileNav />}
        {modalContents === 'shoes' && <ShoesNav />}
        {modalContents === 'blog' && <BlogNav />}
        {modalContents === 'about' && <About />}
      </Modal>
    </>
  );
};

export default Header;
