import { ReactNode } from 'react';
import styles from './cover.module.css';

interface CoverProps {
  children: ReactNode;
}

const Cover = ({ children }: CoverProps) => {
  return (
    <div className={styles.cover}>
      <div className={styles.image}>{children}</div>
      <h1 className={styles.title}>
        You Need
        <br />
        Shoes
      </h1>
      <h2 className={styles.subtitle}>
        <span className={styles.firstLine}>We got the</span>
        <br />
        <span className={styles.secondLine}>shoes you need</span>
      </h2>
    </div>
  );
};

export default Cover;
