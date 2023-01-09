import { useAtom } from 'jotai';
import { contentsAtom, totalAtom } from 'hooks/useCart';
import useCart from 'hooks/useCart';
import Link from 'next/link';
import styles from './cart.module.css';
// import ImageDisplay from '@/image-display';
import Image from 'next/image';
import ChangeQty from 'pages/change-qty';

const Cart = () => {
  const { clearCart, removeFromCart, updateQuantity } = useCart();
  const [cartContents] = useAtom(contentsAtom);

  const cartTotal = cartContents.reduce((a, b) => {
    return (a = a + b.price * b.qty!);
  }, 0);

  return (
    <div className={styles.cartPage}>
      <div className={styles.header}>
        <h2 className={styles.pageTitle}>Your Cart</h2>
        <hr className={styles.rule} />
      </div>
      {cartContents.length === 0 ? (
        <div className={styles.cartDisplay}>
          <p className={styles.empty}>…is empty. This is unfortunate.</p>
          <Link href="/all-shoes">
            <button className="button">Get Shoes</button>
          </Link>
        </div>
      ) : (
        <div className={styles.cartDisplay}>
          {cartContents.map((c) => (
            <div key={c.sku} className={styles.itemContainer}>
              <div className={styles.item}>
                <Link href={`/shoes/${c.slug}`}>
                  <div className={styles.image}>
                    <Image
                      src={`https:${c.image.fields.file.url}`}
                      alt={c.name}
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
                      <Link href={`/shoes/${c.slug}`}>
                        <div className={styles.name}>{c.name}</div>
                      </Link>
                      <div className={styles.size}>Size: {c.size}</div>
                    </div>

                    <div>
                      <div className={styles.qty}>Qty: {c.qty}</div>
                      <div className={styles.price}>{c.price}€</div>
                    </div>
                  </div>

                  <div className={styles.itemActions}>
                    <button
                      aria-label="delete item"
                      className={styles.itemActionBtn}
                      onClick={() => removeFromCart(c.sku)}
                      type="button"
                    >
                      <span className={styles.removeBox}>
                        <span className={styles.removeInner}></span>
                      </span>
                    </button>
                    <button
                      aria-label="change quantity"
                      className={styles.itemActionBtn}
                      onClick={() => updateQuantity(c.sku)}
                      type="button"
                    >
                      <span className={styles.buttonIcon}>
                        <ChangeQty />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.footer}>
            <hr className={styles.rule} />
            <div className={styles.total}>
              <div className={styles.pageTitle}>Cart Total</div>
              <div className={styles.price}>{cartTotal}€</div>
            </div>
            <div className={styles.cartActions}>
              <Link href="/checkout">
                <button className="button" type="button">
                  Checkout
                </button>
              </Link>
              <button className="button" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
