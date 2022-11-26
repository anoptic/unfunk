import SizeTab from 'pages/shoes/size-tab';
import { useState } from 'react';
import styles from './size-widget.module.css';

const sizes = ['XS', 'S', 'M', 'L', 'XL'] as const;
export type Sizes = typeof sizes[number] | null;

const SizeWidget = () => {
  const [selected, setSelected] = useState<Sizes>(null);

  return (
    <div className={styles.widget}>
      <ul className={styles.sizeList}>
        {sizes.map((size) => (
          <SizeTab
            key={size}
            size={size}
            selected={selected}
            setSelected={setSelected}
          >
            {size}
          </SizeTab>
        ))}
      </ul>
    </div>
  );
};

export default SizeWidget;
