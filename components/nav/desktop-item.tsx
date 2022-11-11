import { ReactNode } from 'react';
import { Modal } from '../../hooks/useModal';

interface DesktopItemProps {
  showModal: (v: Modal) => void;
  slug: Modal;
  children: ReactNode;
}

const DesktopItem = ({ showModal, slug, children }: DesktopItemProps) => {
  return (
    <li
      onMouseEnter={() => showModal(slug)}
      // onMouseLeave={() => showModal(null)}
    >
      {children}
    </li>
  );
};

export default DesktopItem;
