import { useAtom } from 'jotai';
import { contentsAtom } from 'hooks/useCart';
import ShoppingBag from './shopping-bag';
import styles from './bag.module.css';
import Link from 'next/link';

const Bag = () => {
  const [cartContents] = useAtom(contentsAtom);

  return (
    <Link href="/cart">
      <button className={styles.bag} type="button" aria-label="shopping bag">
        <span className={styles.icon}>
          <ShoppingBag />
          {cartContents.length > 0 ? (
            <div className={styles.mark} aria-label="cart quantity">
              {cartContents.length}
            </div>
          ) : null}
        </span>
      </button>
    </Link>
  );
};

export default Bag;
