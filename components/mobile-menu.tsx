import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/mobile-menu.module.css';

interface MobileMenuProps {
  isVisible: boolean;
  // toggleModal: () => void;
  children: ReactNode;
}

const MobileMenu = ({ isVisible, children }: MobileMenuProps) => {
  return isVisible
    ? createPortal(
        <div className={styles.overlay}>
          <div className={styles.modal}>{children}</div>
          {/* <button onClick={toggleModal}>Close</button> */}
        </div>,
        document.body
      )
    : null;
};

export default MobileMenu;
