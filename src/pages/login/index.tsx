import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import { mainFont } from "../_app";
import LoginPageStyled from "../../styles/LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const router = useRouter();

  const { isLogged } = useAppSelector((state) => state.user);

  if (isLogged) {
    router.push("/");
  }

  return (
    <>
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
