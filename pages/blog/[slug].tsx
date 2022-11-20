import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CoverImage from '@/home/cover-image';
import { blogpostModel } from 'contentful/content-models';
import { BLOCKS } from '@contentful/rich-text-types';
// import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
// import { BlogPost } from 'types/blogPost';
import styles from './blogPost.module.css';

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

const Text = ({ children }: any) => (
  <p className={styles.paragraph}>{children}</p>
);

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
  },
};

const BlogPost = ({ blogPost }: { blogPost: BlogpostModelEntry }) => {
  // console.log(blogPost);
  const { title, heading, cover, rtext, blogImages } = blogPost.fields;

  return (
    <>
      <div className={styles.cover}>
        <div className={styles.coverImage}>
          <CoverImage source={cover.fields.file.url} />
          <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.heading}>{heading}</div>
        <div className={styles.text}>
          {documentToReactComponents(rtext as any, options)}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
