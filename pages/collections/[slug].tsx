import { collectionModel } from 'contentful/content-models';
import ProductChip from '@/product-chip';
import styles from './collection.module.css';

export const getStaticPaths = async () => {
  const items = await collectionModel.getAll();

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
  const items = await collectionModel.getAll();

  const item = items.filter((i) => i.fields.slug === params.slug);

  return {
    props: {
      collection: item[0],
    },
  };
};

const Collection = ({ collection }: { collection: CollectionModelEntry }) => {
  const { title, slug, description, product } = collection.fields;
  // console.log(product);

  return (
    <div className={styles.productPage}>
      <div className={styles.header}>
        <div className={styles.title}>{title} Collection</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.productList}>
        {product.map((p) => (
          <div className={styles.productChip} key={p.fields.sku}>
            <ProductChip product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
