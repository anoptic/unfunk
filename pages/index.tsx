import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createClient, EntryCollection, RichTextContent } from 'contentful';
import BlogCard from '../components/blog-card';
import CollectionCard from '../components/collection-card';
import SectionCover from '../components/section-cover';
import Section from '../components/section';
import styles from '../styles/home.module.css';
import Cover from '../components/cover';
import { homepageModel, blogpostModel } from '../contentful/content-models';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// interface HomeProps {
//   homePage: any;
// }

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
//   const response = await client.getEntry('1cYqcObX5zY3LDNokbA9oD');

//   return {
//     props: {
//       homePage: response,
//     },
//   };
// };

//* homePage EntryID: CaPxFldqNC38EM4QU7Ju5
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
  const text: RichTextContent = blogPost.fields.rtext;
  console.log('rich text', text);
  // const sections = stuff.items[0].fields.sections;
  // const sections = homePage.fields.sections;
  // console.log('sections', sections);

  return (
    <>
      <div className={styles.copy}>
        {documentToReactComponents(text as any)}
      </div>
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
