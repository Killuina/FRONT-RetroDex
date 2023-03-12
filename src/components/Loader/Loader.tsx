import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled aria-label="page is loading..." role="dialog">
      <span className="loader"></span>
    </LoaderStyled>
  );
};

export default Loader;
