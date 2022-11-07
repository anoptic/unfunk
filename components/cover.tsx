import { ReactNode } from 'react';
import styles from '../styles/cover.module.css';

interface CoverProps {
  children: ReactNode;
}

const Cover = ({ children }: CoverProps) => {
  return (
    <div className={styles.cover}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>You Need Shoes</h2>
        <div className={styles.subtitle}>
          <h3 className={styles.firstLine}>We got the</h3>
          <h3 className={styles.secondLine}>shoes you need</h3>
        </div>
      </div>
      <div className={styles.image}>{children}</div>
    </div>
  );
};

export default Cover;
