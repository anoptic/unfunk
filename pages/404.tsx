import Image from 'next/image';
import notFound from 'public/assets/not-found.jpg';
import styles from './404.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Image
        src={notFound}
        alt="bare feet without shoes"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
      />
    </div>
  );
};

export default NotFound;
