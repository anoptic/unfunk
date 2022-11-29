import { Sizes } from 'pages/shoes/size-widget';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';
import styles from './size-tab.module.css';

interface SizeTabProps {
  size: Sizes;
  selectedSize: Sizes;
  selectSize: (asd: Sizes) => void;
  children: ReactNode;
}

const SizeTab = ({
  size,
  selectedSize,
  selectSize,
  children,
}: SizeTabProps) => {
  return (
    <>
      <li
        className={`${styles.item} ${
          size === selectedSize ? styles.selected : ''
        }`}
        onClick={() => selectSize(size)}
      >
        {children}
      </li>
    </>
  );
};

export default SizeTab;
