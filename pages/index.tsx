import { createClient, EntryCollection } from 'contentful';
import BlogCard from '../components/blog-card';
import CollectionCard from '../components/collection-card';
import CoverImage from '../components/cover-image';
import Section from '../components/section';
import styles from '../styles/home.module.css';
import Cover from '../components/cover';
import useMatchMedia from '../hooks/useMatchmedia';

interface HomeProps {
  page: any;
  sections: any;
  covers: any;
  something: string;
}

//! clean up before merge

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  // const response = await client.getEntries({
  // content_type: 'homePage',
  // include: 10,
  // select: 'items',
  // });
  const response = await client.getEntry('CaPxFldqNC38EM4QU7Ju5');
  const something = 'anything';
  // const sections = response.fields.sections;
  // console.log('**Sections Fetch**', sections);
  // const covers = {
  //   coverMobile: response.fields.coverMobile.fields.file.url,
  //   coverDesktop: response.fields.coverDesktop.fields.file.url,
  // };

  return {
    props: {
      page: response,
      // sections: sections,
      // covers: covers,
      something,
    },
  };
};

const coverOverlay = {
  filter: 'brightness(0.9)',
};

const Home = ({ page, something }: HomeProps) => {
  // console.log('**Home Page**', page);
  const matches = useMatchMedia();

  const sections = page.fields.sections;
  const covers = {
    coverMobile: page.fields.coverMobile.fields.file.url,
    coverDesktop: page.fields.coverDesktop.fields.file.url,
  };

  return (
    <div className={styles.homePage}>
      <Cover>
        {matches ? (
          <CoverImage source={covers.coverMobile} style={coverOverlay} />
        ) : (
          <CoverImage source={covers.coverDesktop} style={coverOverlay} />
        )}
      </Cover>
      <div className={styles.sectionList}>
        {sections.map((section: any) => (
          <Section key={section.sys.id}>
            {section.fields.type === 'Collection' && (
              <CollectionCard section={section}>
                <CoverImage source={section.fields.cover.fields.file.url} />
              </CollectionCard>
            )}
            {section.fields.type === 'Blog' && (
              <BlogCard section={section}>
                <CoverImage source={section.fields.cover.fields.file.url} />
              </BlogCard>
            )}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Home;
