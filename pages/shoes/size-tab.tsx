import { Sizes } from 'pages/shoes/size-widget';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';
import styles from './size-tab.module.css';

interface SizeTabProps {
  size: Sizes;
  selected: Sizes;
  setSelected: Dispatch<SetStateAction<Sizes>>;
  children: ReactNode;
}

const SizeTab = ({ size, selected, setSelected, children }: SizeTabProps) => {
  return (
    <>
      <li
        className={`${styles.item} ${size === selected ? styles.selected : ''}`}
        onClick={() => setSelected((s) => (s = size))}
      >
        {children}
      </li>
    </>
  );
};

export default SizeTab;
