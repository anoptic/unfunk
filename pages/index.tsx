import { createClient } from 'contentful';
import BlogCard from '../components/blog-card';
import CollectionCard from '../components/collection-card';
// import Image from 'next/image';
// import SectionCard from '../components/section-card';
// import BlogPost from './blog/[slug]';
import styles from './home.module.css';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({
    content_type: 'homePage',
    include: 10,
    select: 'fields.sections',
  });

  return {
    props: {
      stuff: response,
    },
  };
};

const Home = ({ stuff }: any) => {
  // console.log('stuff', stuff);
  const sections = stuff.items[0].fields.sections;
  console.log('sections', sections);

  return (
    <>
      <div className={styles.sectionList}>
        {sections.map(
          (section: any) => {
            if (section.fields.type === 'Collection') {
              return <CollectionCard key={section.sys.id} section={section} />;
            }
            if (section.fields.type === 'Blog') {
              return <BlogCard key={section.sys.id} section={section} />;
            }
          }
          // <SectionCard key={section.sys.id} section={section} />
        )}
      </div>
    </>
  );
};

export default Home;
