import { contentfulClient } from '../contentful/client';
import BlogCard from '../components/home/blog-card';
import CollectionCard from '../components/home/collection-card';
import CoverImage from '../components/home/cover-image';
import Section from '../components/home/section';
import styles from './home.module.css';
import Cover from '../components/home/cover';
import useMatchMedia from '../hooks/useMatchmedia';

interface HomeProps {
  page: any;
}

export const getStaticProps = async () => {
  const response = await contentfulClient.getEntry('CaPxFldqNC38EM4QU7Ju5');

  return {
    props: {
      page: response,
    },
  };
};

const coverOverlay = {
  filter: 'brightness(0.9)',
};

const Home = ({ page }: HomeProps) => {
  // console.log('**Home Page**', page);
  const mobileMatches = useMatchMedia();

  const sections = page.fields.sections;
  const covers = {
    coverMobile: page.fields.coverMobile.fields.file.url,
    coverDesktop: page.fields.coverDesktop.fields.file.url,
  };

  return (
    <>
      <div className={styles.homePage}>
        <Cover>
          {mobileMatches ? (
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
    </>
  );
};

export default Home;
