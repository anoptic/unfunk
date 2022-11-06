import { createClient, EntryCollection } from 'contentful';
import BlogCard from '../components/blog-card';
import CollectionCard from '../components/collection-card';
import SectionCover from '../components/section-cover';
import Section from '../components/section';
import styles from '../styles/home.module.css';
import Cover from '../components/cover';

interface HomeProps {
  stuff: any;
}

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

const Home = ({ stuff }: HomeProps) => {
  // console.log('stuff', stuff);
  const sections = stuff.items[0].fields.sections;
  console.log('sections', sections);

  return (
    <>
      <div className={styles.appCover}>
        <Cover />
      </div>
      <div className={styles.sectionList}>
        {sections.map((section: any) => (
          <Section key={section.sys.id}>
            {section.fields.type === 'Collection' && (
              <CollectionCard section={section}>
                <SectionCover source={section.fields.cover.fields.file.url} />
              </CollectionCard>
            )}
            {section.fields.type === 'Blog' && (
              <BlogCard section={section}>
                <SectionCover source={section.fields.cover.fields.file.url} />
              </BlogCard>
            )}
          </Section>
        ))}
      </div>
    </>
  );
};

export default Home;
