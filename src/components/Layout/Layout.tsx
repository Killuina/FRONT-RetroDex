import { PropsWithChildren, useEffect } from "react";
import usePokemon from "../../hooks/usePokemon/usePokemon";
import useToken from "../../hooks/useToken/useToken";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  const { isLoading } = useAppSelector(({ ui }) => ui);

  return (
    <>
      <Modal />
      <Header />
      {isLoading && <Loader />}
      {children}
      <NavBar />
    </>
  );
};

export default Layout;
