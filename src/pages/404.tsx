import Image from "next/image";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <span>4</span>
      <Image
        src="/pokédex-logo-svg.svg"
        alt="Pokédex logo"
        width="30"
        height="30"
      />
      <span>4</span>
      <h2>Page not found</h2>
    </>
  );
};

export default NotFoundPage;
