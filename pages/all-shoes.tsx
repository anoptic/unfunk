import { useState } from 'react';
import { productSort, SortOrderType } from 'utils';
import { allShoesModel, ProductType } from 'contentful/content-models';
import ProductCard from '@/product-card';
import Sorter from '@/sorter';
import styles from './all-shoes.module.css';

export const getStaticProps = async () => {
  const shoes = await allShoesModel.getId();

  return {
    props: {
      allShoes: shoes,
    },
  };
};

const Catalog = ({ allShoes }: { allShoes: AllShoesModelEntry }) => {
  const [sortOrder, setSortOrder] = useState<SortOrderType>('up');
  const { title, slug, shoes } = allShoes.fields;

  const handleSort = () => {
    if (sortOrder === 'up') {
      setSortOrder('down');
    } else {
      setSortOrder('up');
    }
  };

  const sortedProduct: ProductType[] = productSort(shoes, sortOrder);

  return (
    <div className={styles.catalogPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Shoes You Need</div>
        </div>

        <div className={styles.sorter}>
          <Sorter sortOrder={sortOrder} handleSort={handleSort} />
        </div>

        {sortedProduct.map((p) => (
          <div className={styles.productCard} key={p.fields.sku}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
