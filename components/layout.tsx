const Layout = ({ children }: any) => {
  // console.log(props);

  return (
    <>
      <header>
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
