import styles from './mobile-nav.module.css';

const MobileNav = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>Home</li>
        <li>All Shoes</li>
        <li>Casual Collection</li>
        <li>Work Collection</li>
        <li>Dress Collection</li>
        <li>Blog</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default MobileNav;
