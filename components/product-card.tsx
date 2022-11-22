import ImageDisplay from '@/image-display';
import { ProductType } from 'contentful/content-models';
import Link from 'next/link';
import styles from './product-card.module.css';

const ProductCard = ({ product }: { product: ProductType }) => {
  const { name, slug, collection, description, sku, price, image } =
    product.fields;
  // console.log(product);

  return (
    <Link href={`/shoes/${slug}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <ImageDisplay
            source={image.fields.file.url}
            layout="intrinsic"
            height={300}
            width={300}
          />
        </div>
        {/* <div className={styles.info}> */}
        <div className={styles.header}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price}€</div>
        </div>

        <div className={styles.footer}>
          <div className={styles.description}>{description}</div>
          <div className={styles.cta}>
            <button>Add to Cart</button>
            <div className={styles.sku}>SKU {sku}</div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Link>
  );
};

export default ProductCard;
