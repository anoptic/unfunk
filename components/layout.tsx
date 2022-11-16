import { useEffect } from 'react';
import styles from './layout.module.css';
import Header from './header/header';
// import useMatchMedia from '../hooks/useMatchmedia';
// import HeaderMobile from './header/header-mobile';
// import HeaderDesktop from './header/header-desktop';
// import { contentfulClient } from '../contentful/client';

// const getImages = async () => {
//   const response = await contentfulClient.getEntry('3yBox6imcKVyYsVAGYFWAx');

//   return {
//     response,
//   };
// };

const Layout = ({ children }: any) => {
  // const mobileMatches = useMatchMedia();

  // useEffect(() => {
  //   const menuImages = getImages();
  // }, []);

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
