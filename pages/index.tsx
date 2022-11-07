import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createClient, EntryCollection } from 'contentful';
import BlogCard from '../components/blog-card';
import CollectionCard from '../components/collection-card';
import SectionCover from '../components/section-cover';
import Section from '../components/section';
import styles from '../styles/home.module.css';
import Cover from '../components/cover';
import { homepageModel } from '../contentful/homepage-model';

interface HomeProps {
  homePage: any;
}

// export const getStaticProps = async () => {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID as string,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
//   });

//   // const response = await client.getEntries({
//   //   content_type: 'homePage',
//   //   include: 10,
//   //   // select: 'items',
//   // });
//   const response = await client.getEntry('CaPxFldqNC38EM4QU7Ju5');

//   return {
//     props: {
//       stuff: response,
//     },
//   };
// };

//! fix nested objects in model
//! coverDesktop, coverMobile
//! zod problem

// export const getStaticProps: GetStaticProps<{
//   homePage: HomepageModelEntry[];
// }> = async () => {
//   return {
//     props: {
//       homePage: await homepageModel.getAll(),
//     },
//   };
// };
export const getStaticProps: GetStaticProps<{
  homePage: HomepageModelEntry;
}> = async () => {
  return {
    props: {
      homePage: await homepageModel.getId(),
    },
  };
};

const Home = ({ homePage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('stuff', homePage);
  // const sections = stuff.items[0].fields.sections;
  // console.log('sections', sections);

  return (
    <>
      {/* <div className={styles.cover}>
        <Cover />
      </div> */}
      {/* <div className={styles.sectionList}>
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
      </div> */}
    </>
  );
};

export default Home;
