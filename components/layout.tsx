import styles from '../styles/layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Unfunk</h1>
        <hr />
      </header>

      <main>{children}</main>

      <footer>
        <hr />
        <p>shoes you need</p>
      </footer>
    </>
  );
};

export default Layout;
