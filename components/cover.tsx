import { useState, useEffect } from 'react';
import CoverImage from './cover-image';
import styles from '../styles/cover.module.css';

interface CoverProps {
  covers: {
    coverMobile: string;
    coverDesktop: string;
  };
}

const Cover = ({ covers }: CoverProps) => {
  // console.log('**Covers**', covers);
  const [matches, setMatches] = useState(false);
  const overlay = {
    filter: 'brightness(0.8)',
  };

  useEffect(() => {
    const media = window.matchMedia('(max-width: 600px)');

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => removeEventListener('change', listener);
  }, [matches]);

  return (
    <div className={styles.cover}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>You Need Shoes</h2>
        <h3 className={styles.subtitle}>We got the shoes you need</h3>
      </div>
      <div className={styles.image}>
        {matches ? (
          <CoverImage source={covers.coverMobile} style={overlay} />
        ) : (
          <CoverImage source={covers.coverDesktop} style={overlay} />
        )}
      </div>
    </div>
  );
};

export default Cover;
