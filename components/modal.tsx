import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../../hooks/useModal';
import styles from './modal.module.css';

interface ModalProps {
  modalOpen: Modal;
  showModal: (v: Modal) => void;
  children: ReactNode;
}

const Modal = ({ modalOpen, showModal, children }: ModalProps) => {
  return modalOpen
    ? createPortal(
        <div
          className={styles.overlay}
          // onMouseOver={() => showModal(modalOpen ? 'open' : null)}
        >
          <div className={styles.modal} onMouseLeave={() => showModal(null)}>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
