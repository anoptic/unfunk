import { ProductType } from 'contentful/content-models';
import Link from 'next/link';
import Image from 'next/image';
import styles from './product-chip.module.css';

const ProductChip = ({ product }: { product: ProductType }) => {
  const { name, slug, price, image } = product.fields;

  return (
    <Link href={`/shoes/${slug}`} legacyBehavior>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={`https:${image.fields.file.url}`}
              alt="a pair of shoes"
              height={300}
              width={300}
            />
          </div>
          <div className={styles.header}>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{price}€</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductChip;
