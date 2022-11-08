import styles from '../styles/layout.module.css';
import Header from './header';

const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>{children}</main>

      <footer>
        <hr />
        <p>shoes you need</p>
      </footer>
    </div>
  );
};

export default Layout;
