import Link from 'next/link';
import sectionStyles from './section-card.module.css';
import blogStyles from './blog-card.module.css';
import { CardProps } from './collection-card';

const BlogCard = ({ section, children }: CardProps) => {
  const { type, title, slug, caption } = section.fields;

  return (
    <Link href={`/blog/${slug}`}>
      <div className={`${blogStyles.card} ${sectionStyles.card}`}>
        <div className={blogStyles.cover}>
          <div
            className={`${blogStyles.id} ${
              section.fields.slug === 'unfunktion' && blogStyles.vertCenter
            }`}
          >
            <h3
              className={`${blogStyles.title} ${
                section.fields.slug !== 'unfunktion' && blogStyles.altTitle
              }`}
            >
              {title}
            </h3>
          </div>
          <div className={blogStyles.image}>{children}</div>
        </div>
        <p className={blogStyles.caption}>{caption}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
