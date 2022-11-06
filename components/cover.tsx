const Cover = () => {
  // console.log(props);
  return window.matchMedia('(min-width: 600px)') ? (
    <p>Desktop</p>
  ) : (
    <p>Mobile</p>
  );

  return <></>;
};

export default Cover;
