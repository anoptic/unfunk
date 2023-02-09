import { ReactNode } from 'react';
import styles from './section.module.css';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section title={title} className={styles.section}>
      {children}
    </section>
  );
};

export default Section;
