import styles from './size-widget.module.css';

const sizes = ['XS', 'S', 'M', 'L', 'XL'] as const;
export type Sizes = typeof sizes[number] | undefined;
interface SizeWidgetProps {
  selectedSize: Sizes;
  handleSizeChange: (value: Sizes) => void;
}

const SizeWidget = ({ selectedSize, handleSizeChange }: SizeWidgetProps) => {
  return (
    <div className={styles.widget}>
      <ul className={styles.sizeList} arial-label="choose size">
        {sizes.map((size) => (
          <li key={size}>
            <button
              value={size}
              type="button"
              className={`${styles.sizeBtn} ${
                size === selectedSize ? styles.selected : ''
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeWidget;
