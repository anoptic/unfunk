import { allShoesModel } from 'contentful/content-models';
import ProductChip from '@/product-chip';
import { shuffle } from 'utils';
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

const Catalog = ({ allShoes }: { allShoes: ShoeModelEntry[] }) => {
  // console.log(allShoes);

  return (
    <>
      <div className={styles.catalogPage}>
        {/* <div className={styles.header}>
          <div className={styles.title}>{title} Collection</div>
        </div> */}
        <div className={styles.productList}>
          {allShoes.map((shoe: any) => (
            <div className={styles.productChip} key={shoe.fields.sku}>
              <ProductChip product={shoe} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
