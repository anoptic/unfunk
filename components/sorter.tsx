import * as Select from '@radix-ui/react-select';
import { SortOrderType } from 'utils';
import SortIcon from '@/sort-icon';
import styles from './sorter.module.css';

interface SorterProps {
  sortOrder: SortOrderType;
  handleSort: () => void;
}

const Sorter = ({ sortOrder, handleSort }: SorterProps) => {
  return (
    <Select.Root value={sortOrder} onValueChange={handleSort}>
      <Select.Trigger className={styles.trigger}>
        <Select.Value />
        <Select.Icon className={styles.triggerIcon}>
          <SortIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles.content}>
          <Select.Viewport className={styles.viewport}>
            <Select.Group>
              <Select.Label className={styles.label}>Sort by</Select.Label>
              <Select.Item value="up" className={styles.item}>
                <Select.ItemText>Price (Low-High)</Select.ItemText>
              </Select.Item>
              <Select.Item value="down" className={styles.item}>
                <Select.ItemText>Price (High-Low)</Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Sorter;
