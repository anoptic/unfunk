import BlogCard from '@/home/blog-card';
import CoverImage from '@/home/cover-image';
import Section from '@/home/section';
import { blogpostModel } from 'contentful/content-models';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from './all-blogs.module.css';

export const getStaticProps: GetStaticProps<{
  blogPost: BlogpostModelEntry[];
}> = async () => {
  return {
    props: {
      blogPost: await blogpostModel.getAll(),
    },
  };
};

const AllBlogs = ({
  blogPost,
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className={styles.sectionList}>
      {blogPost.map((post) => (
        <Section key={post.sys.id}>
          <BlogCard section={post}>
            <CoverImage source={post.fields.cover.fields.file.url} />
          </BlogCard>
        </Section>
      ))}
    </div>
  );
};

export default AllBlogs;
