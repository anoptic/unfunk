// import Image from 'next/image';
import Link from 'next/link';
import sectionStyles from '../styles/section-card.module.css';
import collectionStyles from '../styles/collection-card.module.css';
import { ReactNode } from 'react';

export interface CardProps {
  section: any;
  children: ReactNode;
}

const CollectionCard = ({ section, children }: CardProps) => {
  const { type, title, slug, caption, images } = section.fields;

  return (
    <>
      {/* <div className={collectionStyles.carousel}>
        <h3>Product Carousel</h3>
      </div> */}
      <Link href={`/collections/${slug}`}>
        <div className={`${collectionStyles.card} ${sectionStyles.card}`}>
          <div className={collectionStyles.cover}>
            <div className={collectionStyles.id}>
              <h3 className={collectionStyles.title}>{title}</h3>
              <p className={collectionStyles.subtitle}>{type}</p>
            </div>
            <div className={collectionStyles.image}>
              {children}
              {/* <Image
                src={`https:${section.fields.cover.fields.file.url}`}
                alt="section cover"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
              /> */}
            </div>
          </div>
          <p className={collectionStyles.caption}>{caption}</p>
        </div>
      </Link>
    </>
  );
};

export default CollectionCard;
