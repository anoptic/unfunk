import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import BlogCard from '../components/blog-card';
import CollectionCard from '../components/collection-card';
import SectionCover from '../components/section-cover';
import Section from '../components/section';
import styles from '../styles/home.module.css';
import Cover from '../components/cover';
import { homepageModel, blogpostModel } from '../contentful/content-models';

///* homePage EntryID: CaPxFldqNC38EM4QU7Ju5
//* streetStyle EntryID: 1cYqcObX5zY3LDNokbA9oD

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
// export const getStaticProps: GetStaticProps<{
//   homePage: HomepageModelEntry;
// }> = async () => {
//   return {
//     props: {
//       homePage: await homepageModel.getId(),
//     },
//   };
// };

//* getId - blogPost
export const getStaticProps: GetStaticProps<{
  blogPost: BlogpostModelEntry;
}> = async () => {
  return {
    props: {
      blogPost: await blogpostModel.getId(),
    },
  };
};

const Home = ({ blogPost }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('stuff', blogPost);
  // const sections = stuff.items[0].fields.sections;
  // const sections = homePage.fields.sections;
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
