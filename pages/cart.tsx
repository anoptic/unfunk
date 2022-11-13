import Link from 'next/link';
import styles from './cart.module.css';

const Cart = () => {
  // console.log(props);

  return (
    <>
      <p>You cart is empty</p>

      <Link href="/">
        <button className={styles.continue}>Continue Shopping</button>
      </Link>
    </>
  );
};

export default Cart;
