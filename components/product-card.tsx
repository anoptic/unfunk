import { ProductType } from 'contentful/content-models';
import Link from 'next/link';
import Image from 'next/image';
import styles from './product-card.module.css';

const ProductCard = ({ product }: { product: ProductType }) => {
  const { name, slug, price, image } = product.fields;

  return (
    <Link href={`/shoes/${slug}`} legacyBehavior>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={`https:${image.fields.file.url}`}
              alt={name}
              layout="responsive"
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

export default ProductCard;
