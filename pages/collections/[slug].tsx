import { useState } from 'react';
import { productSort, SortOrderType } from 'utils';
import { collectionModel, ProductType } from 'contentful/content-models';
import ProductCard from '@/product-card';
import styles from './collection.module.css';
import Sorter from '@/sorter';

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
  const [sortOrder, setSortOrder] = useState<SortOrderType>('up');
  const { title, slug, description, product } = collection.fields;
  // console.log(product);

  const handleSort = () => {
    if (sortOrder === 'up') {
      setSortOrder('down');
    } else {
      setSortOrder('up');
    }
  };

  const sortedProduct: ProductType[] = productSort(product, sortOrder);

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{title} Collection</div>
          <div className={styles.description}>{description}</div>
        </div>

        <div className={styles.sorter}>
          <Sorter sortOrder={sortOrder} handleSort={handleSort} />
        </div>

        {sortedProduct.map((p) => (
          <div className={styles.productChip} key={p.fields.sku}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
