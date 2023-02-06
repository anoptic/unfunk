import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

interface ModalProps {
  modalOpen: boolean;
  children: ReactNode;
}

const Modal = ({ modalOpen, children }: ModalProps) => {
  return createPortal(
    <div
      className={`${styles.overlay} ${
        modalOpen ? styles.overlayOpen : styles.overlayClosed
      }`}
    >
      <div className={styles.modal} data-testid="modal">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
