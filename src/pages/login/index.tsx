import LoginForm from "../../components/LoginForm/LoginForm";
import { mainFont } from "../../styles/fonts/googleFonts";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <h2 className={mainFont.className}>Log in</h2>
      <main className="login-page">
        <LoginForm />
      </main>
    </LoginPageStyled>
  );
};

export default LoginPage;
