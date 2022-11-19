import useMatchMedia from '../../hooks/useMatchmedia';
import useModal from '../../hooks/useModal';
import MobileNav from './mobile-nav/mobile-nav';
import Modal from '../modal';
import Bag from './bag';
import HeaderDesktop from './desktop-nav/header-desktop';
import HeaderMobile from './mobile-nav/header-mobile';
import styles from './header.module.css';

const Header = () => {
  const { modalOpen, showModal } = useModal();
  const mobileMatches = useMatchMedia();

  return (
    <>
      <div className={styles.header}>
        {mobileMatches ? (
          <HeaderMobile modalOpen={modalOpen} showModal={showModal} />
        ) : (
          <HeaderDesktop />
        )}
        <Bag />
        <hr />
      </div>

      {modalOpen && (
        <Modal>
          <MobileNav />
        </Modal>
      )}
    </>
  );
};

export default Header;
