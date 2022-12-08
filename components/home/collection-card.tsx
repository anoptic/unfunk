import Link from 'next/link';
import sectionStyles from './section-card.module.css';
import collectionStyles from './collection-card.module.css';
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

      <Link href={`/collections/${slug}`}>
        <div className={`${collectionStyles.card} ${sectionStyles.card}`}>
          <div className={collectionStyles.cover}>
            <div className={collectionStyles.id}>
              <h3 className={collectionStyles.title}>{title}</h3>
              <p className={collectionStyles.subtitle}>{type}</p>
            </div>
            <div className={collectionStyles.image}>{children}</div>
          </div>
          <p className={collectionStyles.caption}>{caption}</p>
        </div>
      </Link>
    </>
  );
};

export default CollectionCard;
