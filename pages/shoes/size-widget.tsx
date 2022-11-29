import { Dispatch, SetStateAction } from 'react';
import styles from './size-widget.module.css';

const sizes = ['XS', 'S', 'M', 'L', 'XL'] as const;
export type Sizes = typeof sizes[number] | null;
interface SizeWidgetProps {
  selectedSize: Sizes;
  setSelectedSize: Dispatch<SetStateAction<Sizes>>;
}

const SizeWidget = ({ selectedSize, setSelectedSize }: SizeWidgetProps) => {
  return (
    <div className={styles.widget}>
      <ul className={styles.sizeList}>
        {sizes.map((size) => (
          <li
            key={size}
            className={`${styles.item} ${
              size === selectedSize ? styles.selected : ''
            }`}
            onClick={() => setSelectedSize((s) => (s = size))}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeWidget;
