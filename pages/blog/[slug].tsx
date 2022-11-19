import CoverImage from '@/home/cover-image';
import { contentfulClient } from 'contentful/client';
import { blogpostModel } from 'contentful/content-models';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from './blogPost.module.css';

export const getStaticPaths = async () => {
  const items = await blogpostModel.getAll();

  const paths = items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const items = await blogpostModel.getAll();

  const item = items.filter((i) => i.fields.slug === params.slug);

  return {
    props: {
      blogPost: item[0],
    },
  };
};

const BlogPost = ({ blogPost }: any) => {
  // console.log(blogPost);
  const { title, heading, cover, blogImages } = blogPost.fields;

  return (
    <>
      <div className={styles.cover}>
        <h2>{title}</h2>
        <div className={styles.coverImage}>
          <CoverImage source={cover.fields.file.url} />
        </div>
        <p>{heading}</p>
      </div>
    </>
  );
};

export default BlogPost;
