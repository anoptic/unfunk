import Image from 'next/image';
import Link from 'next/link';
import styles from './section-card.module.css';
import blogStyles from './blog-card.module.css';

const BlogCard = ({ section }: any) => {
  const { type, title, slug, caption } = section.fields;

  return (
    <Link href={`/blog/${slug}`}>
      <div className={styles.sectionCard}>
        {/* <h3 className={styles.sectionTitle}>{section.fields.title}</h3> */}
        <div className={styles.sectionImage}>
          <div className={styles.sectionId}>
            <h3
              className={`${styles.sectionTitle} ${
                section.fields.slug !== 'unfunktion' ? styles.blogTitle : ''
              }`}
            >
              {title}
            </h3>
          </div>
          <Image
            src={`https:${section.fields.cover.fields.file.url}`}
            alt="section cover"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
          />
        </div>
        <p className={styles.sectionCaption}>{caption}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
