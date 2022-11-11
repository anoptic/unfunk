import styles from './layout.module.css';
import Header from './header/header';
// import useMatchMedia from '../hooks/useMatchmedia';
// import HeaderMobile from './header/header-mobile';
// import HeaderDesktop from './header/header-desktop';

const Layout = ({ children }: any) => {
  // const mobileMatches = useMatchMedia();

  return (
    <div>
      <header className={styles.header}>
        <Header />
        <hr />
      </header>

      <main>{children}</main>

      <footer>
        <hr />
        <p>shoes you need</p>
      </footer>
    </div>
  );
};

export default Layout;
