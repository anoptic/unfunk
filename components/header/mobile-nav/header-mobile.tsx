import styles from './header-mobile.module.css';
// import { MenuProps } from '../bag';
import Hamburger from './hamburger';
import Logo from '../logo';
import { ModalContents } from '../header';

export interface MenuProps {
  modalOpen: boolean;
  showModal: () => void;
  setModalContents: (v: ModalContents) => void;
}

const HeaderMobile = ({
  modalOpen,
  showModal,
  setModalContents,
}: MenuProps) => {
  return (
    <>
      <div className={styles.header}>
        <Hamburger
          modalOpen={modalOpen}
          showModal={showModal}
          setModalContents={setModalContents}
        />
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
