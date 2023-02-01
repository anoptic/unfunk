import { useAtom } from 'jotai';
import useCart, { contentsAtom } from 'hooks/useCart';
import Link from 'next/link';
import styles from './cart.module.css';
import CartItem from 'pages/cart/cart-item';

const Cart = () => {
  const { clearCart } = useCart();
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
          {cartContents.map((item) => (
            <CartItem key={item.sku} item={item} />
          ))}

          <div className={styles.footer}>
            <hr className={styles.rule} />
            <div className={styles.total}>
              <div className={styles.pageTitle}>Cart Total</div>
              <div className={styles.price}>
                {cartTotal}€ <span className={styles.vat}>(VAT included)</span>
              </div>
            </div>
            <div className={styles.cartActions}>
              <Link href="/404">
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
