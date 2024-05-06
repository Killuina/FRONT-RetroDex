import Image from "next/image";
import { mainFont } from "../../styles/fonts";
import HeaderStyled from "./HeaderStyled";
import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Image
        src="/pokédex-logo-svg.svg"
        alt="Pokédex logo"
        width="30"
        height="30"
      />
      <Link href={"/"}>
        <h1 className={mainFont.className}>RetroDex</h1>
      </Link>
    </HeaderStyled>
  );
};

export default Header;
