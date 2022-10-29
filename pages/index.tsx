import { createClient } from 'contentful';
import Image from 'next/image';
import { Remark } from 'react-remark';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({
    content_type: 'allBlogPosts',
  });

  return {
    props: {
      stuff: response.items,
    },
  };
};

// async function mdParse(mdText: string) {
//   const parsedMd = await remark().use(remarkHtml).process(mdText);

//   console.log(parsedMd.toString());
//   // return parsedMd.toString();
// }

const Home = ({ stuff }: any) => {
  // console.log(stuff[0].fields.post);
  const posts = stuff[0].fields.post;

  return (
    <>
      {/* <h2>Content!</h2> */}
      {posts.map((post: any) => (
        <section key={post.fields.slug}>
          <h3>{post.fields.heading}</h3>
          <p>{post.fields.slug}</p>
          {/* <Remark>{post.fields.text}</Remark> */}
          {/* <div>{post.fields.text}</div> */}
        </section>
      ))}
    </>
  );
};

export default Home;
