import LoginForm from "../../components/LoginForm/LoginForm";
import Modal from "../../components/Modal/Modal";
import { mainFont } from "../_app";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Modal />
      <LoginPageStyled>
        <h2 className={mainFont.className}>Log in</h2>
        <main className="login-page">
          <LoginForm />
        </main>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
