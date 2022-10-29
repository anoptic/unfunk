import { createClient } from 'contentful';
import Image from 'next/image';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({
    content_type: 'blogPost',
  });

  return {
    props: {
      stuff: response.items,
    },
  };
};

const Home = ({ stuff }: any) => {
  const images = stuff[0].fields.blogImages;
  console.log(images);

  return (
    <>
      <h2>{stuff[0].fields.title}</h2>
      <Image
        src={`https:${stuff[0].fields.heroImg.fields.file.url}`}
        alt={stuff[0].fields.heroImg.fields.description}
        width={540}
        height={360}
      />
      {images.map((img: any) => {
        const wh = { w: 540, h: 360 };
        if (
          img.fields.file.details.image.height >
          img.fields.file.details.image.width
        ) {
          wh.w = 360;
          wh.h = 540;
        }
        return (
          <>
            <p>
              {img.fields.title}---
              {img.fields.description}
            </p>
            <Image
              key={img.fields.title}
              src={`https:${img.fields.file.url}`}
              alt={img.fields.description}
              width={wh.w}
              height={wh.h}
            />
          </>
        );
      })}
    </>
  );
};

export default Home;
