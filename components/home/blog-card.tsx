import Link from 'next/link';
import styles from './blog-card.module.css';
import { CardProps } from './collection-card';
import Unfunktion from '@/home/unfunktion';

const BlogCard = ({ section, children }: CardProps) => {
  const { type, title, slug, caption } = section.fields;

  return (
    <Link href={`/blog/${slug}`} legacyBehavior>
      <a>
        <div className={`${styles.card}`}>
          <div className={styles.cover}>
            <div className={styles.id}>
              {section.fields.slug === 'event' ? (
                <div className={styles.logoUnderlay}>
                  <div className={styles.logoContainer}>
                    <Unfunktion />
                  </div>
                </div>
              ) : (
                <h3 className={styles.title}>{title}</h3>
              )}
            </div>
            <div className={styles.image}>{children}</div>
          </div>
          <p className={styles.caption}>{caption}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
