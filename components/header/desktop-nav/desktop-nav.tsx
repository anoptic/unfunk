import * as NavMenu from '@radix-ui/react-navigation-menu';
// import DesktopItem from './desktop-item';
import styles from './desktop-nav.module.css';

const DesktopNav = () => {
  return (
    <NavMenu.Root className={styles.root}>
      <NavMenu.List className={styles.list}>
        <NavMenu.Item className={styles.item}>
          <NavMenu.Trigger className={styles.trigger}>Shoes</NavMenu.Trigger>
          <NavMenu.Content className={styles.content}>
            <ul className={styles.menu}>
              <li>All Shoes</li>
              <li>Casual Collection</li>
              <li>Work Collection</li>
              <li>Dress Collection</li>
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>

        <NavMenu.Item className={styles.item}>
          <NavMenu.Trigger className={styles.trigger}>Blog</NavMenu.Trigger>
          <NavMenu.Content className={styles.content}>
            <ul className={styles.menu}>
              <li>Unfunktion</li>
              <li>Moodboard: Autumn</li>
              <li>Street Style</li>
              <li>Hangin Around</li>
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>

        <NavMenu.Item className={styles.item}>
          <NavMenu.Trigger className={styles.trigger}>About</NavMenu.Trigger>
          <NavMenu.Content className={styles.content}>
            <ul className={styles.menu}>
              <li>About Us</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Support</li>
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>
      </NavMenu.List>

      <div className={styles.viewportPosition}>
        <NavMenu.Viewport className={styles.viewport} />
      </div>
    </NavMenu.Root>
  );
};

export default DesktopNav;
