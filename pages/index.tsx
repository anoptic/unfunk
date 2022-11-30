import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { contentfulClient } from 'contentful/client';

import BlogCard from '@/home/blog-card';
import CollectionCard from '@/home/collection-card';
import CoverImage from '@/home/cover-image';
import Section from '@/home/section';
import styles from './home.module.css';
import Cover from '@/home/cover';
import useMatchMedia from 'hooks/useMatchmedia';
import { homepageModel, blogpostModel } from 'contentful/content-models';

// interface HomepageProps {
//   homePage: InferGetStaticPropsType<typeof getStaticProps>;
// }
// export const getStaticProps: GetStaticProps = async () => {
//   const response = await contentfulClient.getEntry('CaPxFldqNC38EM4QU7Ju5');

//   return {
//     props: {
//       homePage: response,
//     },
//   };
// };

//* homePage EntryID: CaPxFldqNC38EM4QU7Ju5
//* getAll
// export const getStaticProps: GetStaticProps<{
//   homePage: HomepageModelEntry[];
// }> = async () => {
//   return {
//     props: {
//       homePage: await homepageModel.getAll(),
//     },
//   };
// };

//* getId - homePage
export const getStaticProps: GetStaticProps<{
  homePage: HomepageModelEntry;
}> = async () => {
  return {
    props: {
      homePage: await homepageModel.getId(),
    },
  };
};

const coverOverlay = {
  filter: 'brightness(0.9)',
};

const Home = ({ homePage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const Home = ({ homePage }: HomeProps) => {
  // console.log('**Home Page**', homePage);
  const mobileMatches = useMatchMedia();

  const sections = homePage.fields.sections;
  const covers = {
    coverMobile: homePage.fields.coverMobile.fields.file.url,
    coverDesktop: homePage.fields.coverDesktop.fields.file.url,
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
          {sections.map((section) => (
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
