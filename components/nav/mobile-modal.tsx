import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../../hooks/useModal';
import styles from './mobile-menu.module.css';

interface MobileModalProps {
  modal: Modal;
  children: ReactNode;
}

const MobileModal = ({ modal, children }: MobileModalProps) => {
  return modal
    ? createPortal(
        <div className={styles.overlay}>
          <div className={styles.modal}>{children}</div>
        </div>,
        document.body
      )
    : null;
};

export default MobileModal;
