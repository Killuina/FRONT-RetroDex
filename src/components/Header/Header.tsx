import Image from "next/image";
import { mainFont } from "../../styles/fonts";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Image
        src="/pokédex-logo-svg.svg"
        alt="Pokédex logo"
        width="30"
        height="30"
      />
      <h1 className={mainFont.className}>RetroDex</h1>
    </HeaderStyled>
  );
};

export default Header;
