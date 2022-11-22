import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CoverImage from '@/home/cover-image';
import { blogpostModel } from 'contentful/content-models';
import styles from './blogPost.module.css';
import StreetGallery from './street-gallery';
import EventGallery from './event-gallery';
import MoodboardGallery from './moodboard-gallery';
import HangingGallery from './hanging-gallery';

export const getStaticPaths = async () => {
  const items = await blogpostModel.getAll();

  const paths = items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const items = await blogpostModel.getAll();

  const item = items.filter((i) => i.fields.slug === params.slug);

  return {
    props: {
      blogPost: item[0],
    },
  };
};

const BlogPost = ({ blogPost }: { blogPost: BlogpostModelEntry }) => {
  const { title, slug, heading, cover, rtext, blogImages } = blogPost.fields;

  return (
    <>
      <div className={styles.cover}>
        <div className={styles.coverImage}>
          <CoverImage source={cover.fields.file.url} />
          <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.info}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.text}>
            {documentToReactComponents(rtext as any)}
          </div>
        </div>
      </div>

      {slug === 'event' && <EventGallery blogImages={blogImages} />}
      {slug === 'street' && <StreetGallery blogImages={blogImages} />}
      {slug === 'moodboard' && <MoodboardGallery blogImages={blogImages} />}
      {slug === 'hanging' && <HangingGallery blogImages={blogImages} />}
    </>
  );
};

export default BlogPost;
