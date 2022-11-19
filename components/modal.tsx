import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
