import ImageDisplay from '@/image-display';
import { GalleryProps } from 'types/blogPost';
import styles from './gallery.module.css';

const StreetGallery = ({ blogImages }: GalleryProps) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <div className={`${styles.img} ${styles.vertSlim}`}>
          <ImageDisplay source={blogImages[0].fields.file.url} fit="contain" />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.group}>
          <div className={`${styles.img} ${styles.grp14}`}>
            <ImageDisplay
              source={blogImages[1].fields.file.url}
              fit="contain"
            />
          </div>
          <div className={`${styles.img} ${styles.grp23}`}>
            <ImageDisplay
              source={blogImages[2].fields.file.url}
              fit="contain"
            />
          </div>
        </div>
        <div className={styles.group}>
          <div className={`${styles.img} ${styles.grp23}`}>
            <ImageDisplay
              source={blogImages[3].fields.file.url}
              fit="contain"
            />
          </div>
          <div className={`${styles.img} ${styles.grp14}`}>
            <ImageDisplay
              source={blogImages[4].fields.file.url}
              fit="contain"
            />
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={`${styles.img} ${styles.vert}`}>
          <ImageDisplay source={blogImages[5].fields.file.url} />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.group}>
          <div className={`${styles.img} ${styles.grp14}`}>
            <ImageDisplay
              source={blogImages[6].fields.file.url}
              fit="contain"
            />
          </div>
          <div className={`${styles.img} ${styles.grp23}`}>
            <ImageDisplay
              source={blogImages[7].fields.file.url}
              fit="contain"
            />
          </div>
        </div>
        <div className={styles.group}>
          <div className={`${styles.img} ${styles.grp23}`}>
            <ImageDisplay
              source={blogImages[8].fields.file.url}
              fit="contain"
            />
          </div>
          <div className={`${styles.img} ${styles.grp14}`}>
            <ImageDisplay
              source={blogImages[9].fields.file.url}
              fit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetGallery;
