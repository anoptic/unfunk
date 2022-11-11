import { Modal } from '../../hooks/useModal';
import DesktopItem from './desktop-item';
import styles from './desktop-nav.module.css';

interface DesktopNavProps {
  modalOpen: Modal;
  showModal: (v: Modal) => void;
}

const DesktopNav = ({ modalOpen, showModal }: DesktopNavProps) => {
  return (
    <nav className={styles.container}>
      <ul>
        <DesktopItem showModal={showModal} slug="shoes">
          Shoes
        </DesktopItem>
        <DesktopItem showModal={showModal} slug="blog">
          Blog
        </DesktopItem>
        <DesktopItem showModal={showModal} slug="about">
          About
        </DesktopItem>
      </ul>
    </nav>
  );
};

export default DesktopNav;
