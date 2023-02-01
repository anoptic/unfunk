import { useState } from 'react';
import Image from 'next/image';
import ProductCard from '@/product-card';
import { shoeModel } from 'contentful/content-models';
import useCart, { Product } from 'hooks/useCart';
import SizeWidget, { Sizes } from '@/size-widget';
import { shuffle } from 'utils';
import styles from './shoes.module.css';
import { Asset } from 'contentful';
import useToast from 'hooks/useToast';
import MessageToast from '@/toast';
import useAlert from 'hooks/useAlert';
import Alert from '@/alert';

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
  const { addToCart } = useCart();
  const { toastOpen, openToast, closeToast } = useToast();
  const { alertOpen, openAlert, closeAlert } = useAlert();
  const [selectedSize, setSelectedSize] = useState<Sizes>(undefined);
  const { name, slug, description, collection, price, sku, image } =
    shoe.fields;

  const selectedProduct: Product = {
    name,
    slug,
    size: selectedSize,
    price,
    image: image as Asset,
    sku,
  };

  const handleSizeChange = (value: Sizes) => {
    console.log(value);
    setSelectedSize(() => value);
  };

  const checkSize = () => {
    if (!selectedSize) {
      openAlert();
      return;
    }
    addToCart(selectedProduct);
    openToast();
  };

  return (
    <>
      <Alert open={alertOpen} closeAlert={closeAlert}>
        Please select a size before adding item to cart
      </Alert>
      <MessageToast open={toastOpen} closeToast={closeToast}>
        Item has been added to your shopping cart!
      </MessageToast>

      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={`https:${shoe.fields.image.fields.file.url}`}
            alt={shoe.fields.name}
            layout="intrinsic"
            height={300}
            width={300}
          />
        </div>
        <div className={styles.info}>
          <div>
            <div className={styles.header}>
              <div className={styles.name}>{name}</div>
              <div className={styles.price}>{price}€</div>
            </div>
            <div className={styles.description}>{description}</div>
          </div>

          <div className={styles.footer}>
            <div className={styles.size}>
              <SizeWidget
                selectedSize={selectedSize}
                handleSizeChange={handleSizeChange}
              />
            </div>
            <div className={styles.cta}>
              <button
                className="button"
                type="button"
                onClick={() => checkSize()}
              >
                Add to Cart
              </button>
              <div className={styles.sku}>SKU: {sku}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recommend}>
        <div className={styles.recTitle}>Recommended for you</div>
        <div className={styles.productList}>
          {recommend.map((rec) => (
            <div className={styles.productCard} key={rec.fields.slug}>
              <ProductCard product={rec} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoeDisplay;
