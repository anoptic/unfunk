import { createPortal } from 'react-dom';
import styles from '../styles/mobile-menu.module.css';

interface MobileMenuProps {
  isVisible: boolean;
  toggleModal: () => void;
}

const MobileMenu = ({ isVisible, toggleModal }: MobileMenuProps) => {
  return isVisible
    ? createPortal(
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h5>Modal</h5>
            <span>Why this modal has popped up</span>
          </div>
          {/* <button onClick={toggleModal}>Close</button> */}
        </div>,
        document.body
      )
    : null;
};

export default MobileMenu;
