import Link from 'next/link';
import Image from 'next/image';
import notFound from 'public/assets/not-found.jpg';
import Glyph404 from '@/404-glyph';
import styles from './404.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.background}>
        <Image
          src={notFound}
          alt="bare feet without shoes"
          className={styles.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.foreground}>
        <div className={styles.glyph}>
          <Glyph404 />
        </div>
        <div className={styles.text}>
          <p>There&rsquo;s nothing here.</p>
          <p>Let&rsquo;s get you someplace</p>
          <p> more interesting.</p>
        </div>
        <div>
          <Link href="/all-shoes">
            <button className="button">Get Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
