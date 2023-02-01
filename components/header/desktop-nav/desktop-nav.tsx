import * as NavMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './desktop-nav.module.css';
import Image from 'next/image';
import Logo from '../logo';

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
                <div className={styles.card}>
                  <Image
                    src={allShoes}
                    alt="all shoes"
                    className={styles.image}
                  />
                  <div className={styles.title}>
                    <span className={styles.superTitle}>All</span> <br /> Shoes
                  </div>
                </div>
              </ListItem>
              <ListItem href="/collections/casual">
                <div className={styles.card}>
                  <Image
                    src={casualShoes}
                    alt="casual shoes"
                    className={styles.image}
                  />
                  <div className={styles.title}>
                    <span className={styles.superTitle}>Casual</span> Collection
                  </div>
                </div>
              </ListItem>
              <ListItem href="/collections/work">
                <div className={styles.card}>
                  <Image
                    src={workShoes}
                    alt="work shoes"
                    className={styles.image}
                  />
                  <div className={styles.title}>
                    <span className={styles.superTitle}>Work</span> Collection
                  </div>
                </div>
              </ListItem>
              <ListItem href="/collections/dress">
                <div className={styles.card}>
                  <Image
                    src={dressShoes}
                    alt="dress shoes"
                    className={styles.image}
                  />
                  <div className={styles.title}>
                    <span className={styles.superTitle}>Dress</span> Collection
                  </div>
                </div>
              </ListItem>
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>

        <NavMenu.Item className={styles.item}>
          <NavMenu.Trigger className={styles.trigger}>Blog</NavMenu.Trigger>
          <NavMenu.Content className={styles.content}>
            <ul className={styles.menu}>
              <ListItem href="/blog/event">
                <div className={styles.card}>
                  <Image
                    src={unfunktion}
                    alt="unfunktion event"
                    className={styles.image}
                  />
                  <div className={`${styles.title} ${styles.unfunk}`}>
                    Unfunktion
                  </div>
                </div>
              </ListItem>
              <ListItem href="/blog/moodboard">
                <div className={styles.card}>
                  <Image
                    src={moodboard}
                    alt="moodboard autumn"
                    className={styles.image}
                  />
                  <div
                    className={`${styles.title} ${styles.moodboard} ${styles.blogTitle}`}
                  >
                    Moodboard: Autumn
                  </div>
                </div>
              </ListItem>
              <ListItem href="/blog/street">
                <div className={styles.card}>
                  <Image
                    src={streetStyle}
                    alt="street style"
                    className={styles.image}
                  />
                  <div
                    className={`${styles.title} ${styles.street} ${styles.blogTitle}`}
                  >
                    Street Style
                  </div>
                </div>
              </ListItem>
              <ListItem href="/blog/hanging">
                <div className={styles.card}>
                  <Image
                    src={hanging}
                    alt="hanging around"
                    className={styles.image}
                  />
                  <div
                    className={`${styles.title} ${styles.hanging} ${styles.blogTitle}`}
                  >
                    Hanging Around
                  </div>
                </div>
              </ListItem>
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>

        <NavMenu.Item className={styles.item}>
          <NavMenu.Trigger className={styles.trigger}>About</NavMenu.Trigger>
          <NavMenu.Content className={styles.content}>
            <ul className={styles.menu}>
              <div></div>
              <ListItem href="/">
                <div className={styles.logoCard}>
                  <Image
                    src={allShoes}
                    alt="all shoes"
                    className={styles.logoImage}
                  />
                  <div className={styles.logoBox}>
                    <span className={styles.logo}>
                      <Logo />
                    </span>
                    <span className={styles.tag}>shoes you need</span>
                  </div>
                </div>
              </ListItem>
              <div className={styles.aboutBox}>
                <ul className={styles.aboutList}>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/404">Shipping</Link>
                  </li>
                  <li>
                    <Link href="/404">Returns</Link>
                  </li>
                  <li>
                    <Link href="/404">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div></div>
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
