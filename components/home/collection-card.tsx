import Link from 'next/link';
import styles from './collection-card.module.css';
import { ReactNode } from 'react';
import ProductCarousel from './product-carousel';
import { SectionType } from 'contentful/content-models';

export interface CardProps {
  section: SectionType;
  children: ReactNode;
}

const CollectionCard = ({ section, children }: CardProps) => {
  const { type, title, slug, caption, images } = section.fields;

  return (
    <>
      <ProductCarousel images={images!} />

      <Link href={`/collections/${slug}`} legacyBehavior>
        <a>
          <div className={`${styles.card}`}>
            <div className={styles.cover}>
              <div className={styles.id}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{type}</p>
              </div>
              <div className={styles.image}>{children}</div>
            </div>
            <p className={styles.caption}>{caption}</p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default CollectionCard;
