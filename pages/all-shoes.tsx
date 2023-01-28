import { useState } from 'react';
import { productSort, SortOrderType } from 'utils';
import { allShoesModel, ProductType } from 'contentful/content-models';
import ProductCard from '@/product-card';
import { shuffle } from 'utils';
import SortIcon from '@/sort-icon';
import styles from './all-shoes.module.css';

export const getStaticProps = async () => {
  const response = await allShoesModel.getId();
  const shoes = shuffle(response.fields.shoes);

  return {
    props: {
      allShoes: shoes,
    },
  };
};

const Catalog = ({ allShoes }: { allShoes: ProductType[] }) => {
  const [sortOrder, setSortOrder] = useState<SortOrderType>('up');

  const handleClick = () => {
    if (sortOrder === 'up') {
      setSortOrder('down');
    } else {
      setSortOrder('up');
    }
  };

  const sortedProduct: ProductType[] = productSort(allShoes, sortOrder);

  return (
    <>
      <div className={styles.catalogPage}>
        {/* <div className={styles.header}>
          <div className={styles.title}>{title} Collection</div>
        </div> */}
        <div className={styles.productList}>
          {sortedProduct.map((shoe: any) => (
            <div className={styles.productCard} key={shoe.fields.sku}>
              <ProductCard product={shoe} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
