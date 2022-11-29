import ImageDisplay from '@/image-display';
import Link from 'next/link';
import { Product } from 'hooks/useCart';
import { ReactNode } from 'react';
import styles from './cart-chip.module.css';

interface CartChipProps {
  product: Product;
  // children: ReactNode;
}

const CartChip = ({ product }: CartChipProps) => {
  const { name, slug, size, price, image } = product;
  return (
    <>
      <div className={styles.item}>
        <Link href={`/shoes/${slug}`}>
          <div className={styles.image}>
            <ImageDisplay
              source={image.fields.file.url}
              layout="intrinsic"
              height={150}
              width={150}
            />
          </div>
        </Link>
        <div>
          <Link href={`/shoes/${slug}`}>
            <div>{name}</div>
          </Link>
          <div>{size}</div>
          <div>{price}</div>
        </div>
      </div>
    </>
  );
};

export default CartChip;
