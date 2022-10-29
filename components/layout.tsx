import { ReactNode } from 'react';

const Layout = ({ children }: any) => {
  // console.log(props);

  return (
    <main>
      <header>
        <h1>Unfunk</h1>
        <hr />
      </header>

      <div>{children}</div>

      <footer>
        <hr />
        <p>shoes you need</p>
      </footer>
    </main>
  );
};

export default Layout;
