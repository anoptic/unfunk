import Image from 'next/image';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';
import useCart, { Product } from 'hooks/useCart';
import styles from './cart-item.module.css';
import ChangeQty from 'pages/cart/change-qty';

interface CartItemProps {
  item: Product;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <>
      <div key={item.sku} className={styles.itemContainer}>
        <div className={styles.item}>
          <Link href={`/shoes/${item.slug}`}>
            <div className={styles.image}>
              <Image
                src={`https:${item.image.fields.file.url}`}
                alt={item.name}
                layout="responsive"
                height={90}
                width={90}
                sizes="(min-width: 900) 25vh, 15vh"
              />
            </div>
          </Link>
          <div className={styles.rightSide}>
            <div className={styles.info}>
              <div className={styles.nameSize}>
                <Link href={`/shoes/${item.slug}`}>
                  <div className={styles.name}>{item.name}</div>
                </Link>
                <div className={styles.size}>Size: {item.size}</div>
              </div>

              <div>
                <div className={styles.qty}>Qty: {item.qty}</div>
                <div className={styles.price}>{item.price}€</div>
              </div>
            </div>

            <div className={styles.itemActions}>
              <button
                aria-label="delete item"
                className={styles.itemActionBtn}
                onClick={() => removeFromCart(item.sku)}
                type="button"
              >
                <span className={styles.iconBox}>
                  <span className={styles.removeInner}></span>
                </span>
              </button>
              <div>
                <Popover.Root modal={true}>
                  <Popover.Trigger asChild>
                    <button
                      aria-label="change quantity"
                      className={styles.itemActionBtn}
                      type="button"
                    >
                      <span className={styles.buttonIcon}>
                        <ChangeQty />
                      </span>
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      className={styles.popoverContent}
                      side="left"
                      sideOffset={16}
                      align="end"
                      alignOffset={-4}
                    >
                      <h4 className={styles.popoverTitle}>Change Quantity</h4>
                      <div className={styles.changeQtyForm}>
                        <button
                          aria-label="add quantity"
                          className={styles.itemActionBtn}
                          onClick={() => updateQuantity(item.sku, 'add')}
                          type="button"
                        >
                          <span className={styles.iconBox}>
                            <span
                              className={`${styles.addInner} ${styles.inner}`}
                            ></span>
                          </span>
                        </button>
                        <p className={styles.popoverQty}>{item.qty}</p>
                        <button
                          aria-label="subtract quantity"
                          className={styles.itemActionBtn}
                          onClick={() => updateQuantity(item.sku, 'subtract')}
                          type="button"
                        >
                          <span className={styles.iconBox}>
                            <span className={styles.inner}></span>
                          </span>
                        </button>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
