import { createClient, EntryCollection } from 'contentful';
import BlogCard from '../components/blog-card';
import CollectionCard from '../components/collection-card';
import CoverImage from '../components/cover-image';
import Section from '../components/section';
import styles from '../styles/home.module.css';
import Cover from '../components/cover';

interface HomeProps {
  page: any;
  sections: any;
  covers: any;
  something: string;
}

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

const Home = ({ page, something }: HomeProps) => {
  // console.log('**Home Page**', page);
  // console.log(something);
  const sections = page.fields.sections;
  const covers = {
    coverMobile: page.fields.coverMobile.fields.file.url,
    coverDesktop: page.fields.coverDesktop.fields.file.url,
  };
  // console.log('**Sections**', sections);

  return (
    <div className={styles.homePage}>
      <Cover covers={covers} />
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
