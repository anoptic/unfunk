import { useAtom } from 'jotai';
import { contentsAtom } from 'hooks/useCart';
import useCart from 'hooks/useCart';
import Link from 'next/link';
import { Sizes } from 'pages/shoes/size-widget';
import styles from './cart.module.css';

const Cart = () => {
  const { clearCart } = useCart();
  const [cartContents] = useAtom(contentsAtom);
  console.log('cart', cartContents);

  return (
    <>
      {cartContents.length === 0 ? <p>You cart is empty</p> : null}

      <div>
        {cartContents.length > 0
          ? cartContents.map((c) => (
              <div key={c.sku} className={styles.item}>
                <div>{c.name}</div>
                <div>{c.price}</div>
              </div>
            ))
          : null}
      </div>

      <Link href="/">
        <button className={styles.continue}>Continue</button>
      </Link>
      <button className={styles.continue} onClick={clearCart}>
        Clear Cart
      </button>
    </>
  );
};

export default Cart;
