import { useAtom } from 'jotai';
import { contentsAtom } from 'hooks/useCart';
import useCart from 'hooks/useCart';
import Link from 'next/link';
// import { Sizes } from 'pages/shoes/size-widget';
import styles from './cart.module.css';
// import CartChip from '@/cart-chip';
import ImageDisplay from '@/image-display';

const Cart = () => {
  const { clearCart, removeFromCart } = useCart();
  const [cartContents] = useAtom(contentsAtom);
  console.log('cart', cartContents);

  return (
    <>
      {cartContents.length === 0 ? <p>You cart is empty</p> : null}

      <h2>Your Cart</h2>
      <div className={styles.cartDisplay}>
        {cartContents.map((c) => (
          <div key={c.key} className={styles.item}>
            <Link href={`/shoes/${c.slug}`}>
              <div className={styles.image}>
                <ImageDisplay
                  source={c.image.fields.file.url}
                  layout="intrinsic"
                  height={150}
                  width={150}
                />
              </div>
            </Link>
            <div>
              <Link href={`/shoes/${c.slug}`}>
                <div>{c.name}</div>
              </Link>
              <div>{c.size}</div>
              <div>{c.price}</div>
              <button onClick={() => removeFromCart(c.key!)}>X</button>
            </div>
          </div>
        ))}
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
