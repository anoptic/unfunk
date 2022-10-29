import { createClient } from 'contentful';
import Image from 'next/image';
import styles from './home.module.css';

type LoaderProps = {
  src: string;
  // width: number;
  // quality: number;
};

const loader = ({ src }: LoaderProps) => {
  return `https:${src}?fit=crop`;
};

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

const Home = ({ stuff }: any) => {
  console.log(stuff[0].fields.post);
  const posts = stuff[0].fields.post;

  return (
    <section className={styles.blogList}>
      {posts.map((post: any) => (
        <article className={styles.blogCard} key={post.fields.slug}>
          <h2 className={styles.blogTitle}>{post.fields.title}</h2>
          <div className={styles.cardImage}>
            <Image
              loader={loader}
              src={post.fields.heroImg.fields.file.url}
              alt="section hero"
              layout="fill"
              objectFit="cover"
              // sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>
          <p>{post.fields.caption}</p>
        </article>
      ))}
    </section>
  );
};

export default Home;
