import MobileNavItem from '@/header/mobile-nav/mobile-nav-item';
import styles from './mobile-nav.module.css';

interface MobileNavProps {
  showModal: () => void;
}

const menuItems = [
  { page: '', title: 'Home', key: 1 },
  { page: 'all-shoes', title: 'All Shoes', key: 2 },
  { page: 'collections/casual', title: 'Casual Collection', key: 3 },
  { page: 'collections/work', title: 'Work Collection', key: 4 },
  { page: 'collections/dress', title: 'Dress Collection', key: 5 },
  { page: 'all-blogs', title: 'Blog', key: 6 },
  { page: 'about', title: 'About', key: 7 },
];

const MobileNav = ({ showModal }: MobileNavProps) => {
  return (
    <nav className={styles.container}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.key} onClick={() => showModal()}>
            <MobileNavItem page={item.page}>{item.title}</MobileNavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
