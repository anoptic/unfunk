import styles from './layout.module.css';
import Header from '@/header/header';
import { ReactNode } from 'react';
import Footer from '@/footer/footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Unfunk—shoes you need</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Header />
        {/* <hr /> */}
      </header>

      <main>{children}</main>

      <footer>
        <hr />
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
