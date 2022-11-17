import * as NavMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './desktop-nav.module.css';
import CoverImage from '@/home/local-image';

import allShoes from 'public/assets/menu-images/all-shoes.jpg';
import casualShoes from 'public/assets/menu-images/casual-shoes1.jpg';
import workShoes from 'public/assets/menu-images/work-shoes.jpg';
import dressShoes from 'public/assets/menu-images/dress-shoes.jpg';
import unfunktion from 'public/assets/menu-images/unfunktion-bg.jpg';
import moodboard from 'public/assets/menu-images/moodboard.jpg';
import streetStyle from 'public/assets/menu-images/street-style.jpg';
import hanging from 'public/assets/menu-images/hanging.jpg';

interface ListItemProps {
  href: string;
  children: ReactNode;
}

const ListItem = ({ href, children }: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      <Link href={href} passHref>
        <NavMenu.Link>{children}</NavMenu.Link>
      </Link>
    </li>
  );
};

const DesktopNav = () => {
  return (
    <NavMenu.Root className={styles.root}>
      <NavMenu.List className={styles.list}>
        <NavMenu.Item className={styles.item}>
          <NavMenu.Trigger className={styles.trigger}>Shoes</NavMenu.Trigger>
          <NavMenu.Content className={styles.content}>
            <ul className={styles.menu}>
              <ListItem href="/all-shoes">
                <div className={styles.image}>
                  <CoverImage source={allShoes} />
                  <div className={styles.title}>All Shoes</div>
                </div>
              </ListItem>
              <ListItem href="/collections/casual">
                <div className={styles.image}>
                  <CoverImage source={casualShoes} />
                  <div className={styles.title}>Casual Collection</div>
                </div>
              </ListItem>
              <ListItem href="/collections/work">
                <div className={styles.image}>
                  <CoverImage source={workShoes} />
                  <div className={styles.title}>Work Collection</div>
                </div>
              </ListItem>
              <ListItem href="/collections/dress">
                <div className={styles.image}>
                  <CoverImage source={dressShoes} />
                  <div className={styles.title}>Dress Collection</div>
                </div>
              </ListItem>
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>

        <NavMenu.Item className={styles.item}>
          <NavMenu.Trigger className={styles.trigger}>Blog</NavMenu.Trigger>
          <NavMenu.Content className={styles.content}>
            <ul className={styles.menu}>
              <ListItem href="/blog/unfunktion">
                <div className={styles.image}>
                  <CoverImage source={unfunktion} />
                  <div className={styles.title}>Unfunktion</div>
                </div>
              </ListItem>
              <ListItem href="/blog/moodboard">
                <div className={styles.image}>
                  <CoverImage source={moodboard} />
                  <div className={styles.title}>Moodboard: Autumn</div>
                </div>
              </ListItem>
              <ListItem href="/blog/street-style">
                <div className={styles.image}>
                  <CoverImage source={streetStyle} />
                  <div className={styles.title}>Street Style</div>
                </div>
              </ListItem>
              <ListItem href="/blog/hanging">
                <div className={styles.image}>
                  <CoverImage source={hanging} />
                  <div className={styles.title}>Hanging Around</div>
                </div>
              </ListItem>
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

      <div className={styles.viewportContainer}>
        <NavMenu.Viewport className={styles.viewport} />
      </div>
    </NavMenu.Root>
  );
};

export default DesktopNav;
