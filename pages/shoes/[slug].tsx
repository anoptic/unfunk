import ImageDisplay from '@/image-display';
import ProductChip from '@/product-chip';
import { shoeModel } from 'contentful/content-models';
import { shuffle } from 'utils';
import styles from './shoes.module.css';

export const getStaticPaths = async () => {
  const items = await shoeModel.getAll();

  const paths = items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const items = await shoeModel.getAll();

  const item = items.filter((i) => i.fields.slug === params.slug);
  const others = items.filter((i) => i.fields.slug !== params.slug);
  const recs = shuffle(others);

  return {
    props: {
      shoe: item[0],
      recommend: recs.slice(-4),
    },
  };
};

const ShoeDisplay = ({
  shoe,
  recommend,
}: {
  shoe: ShoeModelEntry;
  recommend: ShoeModelEntry[];
}) => {
  // console.log(recommend);
  const { name, slug, description, collection, price, sku, image } =
    shoe.fields;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}>
          <ImageDisplay
            source={image.fields.file.url}
            layout="intrinsic"
            height={300}
            width={300}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price}</div>
          <div className={styles.description}>{description}</div>
          {/* <SizeWidget /> */}
          <div className={styles.cta}>
            <button className={styles.butBtn}>Add to Cart</button>
            <div className={styles.sku}>{sku}</div>
          </div>
          <div>Part of the {collection} Collection</div>
        </div>
      </div>
      <h3>Recommended for you:</h3>
      <div className={styles.productList}>
        {recommend.map((rec) => (
          <div className={styles.productChip} key={rec.fields.slug}>
            <ProductChip product={rec} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoeDisplay;
