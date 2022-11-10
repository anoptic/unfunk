import { ReactNode } from 'react';
import styles from './section.module.css';

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  // console.log(props);

  return <div className={styles.section}>{children}</div>;
};

export default Section;
