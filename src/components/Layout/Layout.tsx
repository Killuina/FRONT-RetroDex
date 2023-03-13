import { PropsWithChildren } from "react";
import { useAppSelector } from "../../store/hooks";
import Loader from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const { isLoading } = useAppSelector(({ ui }) => ui);

  return (
    <>
      {isLoading && <Loader />}
      {children}
      <NavBar />
    </>
  );
};

export default Layout;
