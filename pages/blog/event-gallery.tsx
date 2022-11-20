import ImageDisplay from '@/image-display';
import { GalleryProps } from 'types/blogPost';
import styles from './gallery.module.css';

const EventGallery = ({ blogImages }: GalleryProps) => {
  return (
    <>
      <div className={styles.gallery}>
        <div className={`${styles.img} ${styles.flyer}`}>
          <ImageDisplay
            source={
              blogImages.find((i) => i.fields.title === 'unfunktion-flyer')!
                .fields.file.url
            }
          />
        </div>
        <div className={`${styles.img} ${styles.horz}`}>
          <ImageDisplay
            source={
              blogImages.find((i) => i.fields.title === 'event05')!.fields.file
                .url
            }
          />
        </div>

        <div className={`${styles.img} ${styles.vertSlim}`}>
          <ImageDisplay source={blogImages[0].fields.file.url} />
        </div>

        <div className={styles.groupContainer}>
          <div className={`${styles.group} ${styles.group1}`}>
            <div className={`${styles.img} ${styles.grp14}`}>
              <ImageDisplay source={blogImages[1].fields.file.url} />
            </div>
            <div className={`${styles.img} ${styles.grp23}`}>
              <ImageDisplay source={blogImages[2].fields.file.url} />
            </div>
          </div>
          <div className={`${styles.group} ${styles.group2}`}>
            <div className={`${styles.img} ${styles.grp23}`}>
              <ImageDisplay source={blogImages[3].fields.file.url} />
            </div>
            <div className={`${styles.img} ${styles.grp14}`}>
              <ImageDisplay source={blogImages[4].fields.file.url} />
            </div>
          </div>
        </div>

        <div className={`${styles.img} ${styles.vert}`}>
          <ImageDisplay source={blogImages[5].fields.file.url} />
        </div>

        <div className={styles.groupContainer}>
          <div className={`${styles.group} ${styles.group1}`}>
            <div className={`${styles.img} ${styles.grp14}`}>
              <ImageDisplay source={blogImages[6].fields.file.url} />
            </div>
            <div className={`${styles.img} ${styles.grp23}`}>
              <ImageDisplay source={blogImages[7].fields.file.url} />
            </div>
          </div>
          <div className={`${styles.group} ${styles.group2}`}>
            <div className={`${styles.img} ${styles.grp23}`}>
              <ImageDisplay source={blogImages[8].fields.file.url} />
            </div>
            <div className={`${styles.img} ${styles.grp14}`}>
              <ImageDisplay source={blogImages[9].fields.file.url} />
            </div>
          </div>
        </div>

        <div className={`${styles.img} ${styles.vert}`}>
          <ImageDisplay source={blogImages[10].fields.file.url} />
        </div>
      </div>
    </>
  );
};

export default EventGallery;
