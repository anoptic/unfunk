import Image from 'next/image';
import Link from 'next/link';
import styles from './section-card.module.css';
import collectionStyles from './collection-card.module.css';

const CollectionCard = ({ section }: any) => {
  const { type, title, slug, caption, images } = section.fields;

  return (
    <>
      <div className={collectionStyles.carousel}>
        <h3>Product Carousel</h3>
      </div>
      <Link href={`/collections/${slug}`}>
        <div className={collectionStyles.collectionCard}>
          {/* <h3 className={styles.sectionTitle}>{section.fields.title}</h3> */}
          <div className={collectionStyles.collectionImage}>
            <div className={collectionStyles.collectionId}>
              <h3
                className={`${styles.sectionTitle} ${styles.collectionTitle}`}
              >
                {title}
              </h3>
              <p className={styles.sectionSubtitle}>{section.fields.type}</p>
            </div>
            <Image
              src={`https:${section.fields.cover.fields.file.url}`}
              alt="section cover"
              // width="360"
              // height="180"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
            />
          </div>
          <p className={styles.sectionCaption}>{caption}</p>
        </div>
      </Link>
    </>
  );
};

export default CollectionCard;
