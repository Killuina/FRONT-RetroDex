import Image from "next/image";
import NotFoundPageStyled from "../styles/pages/NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <span>
        <span>4</span>
        <Image
          src="/pokédex-logo-svg.svg"
          alt="Pokédex logo"
          width="40"
          height="40"
        />
        <span>4</span>
      </span>
      <h2>Page not found</h2>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
