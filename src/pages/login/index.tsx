import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import { mainFont } from "../../styles/fonts";
import LoginPageStyled from "../../styles/pages/LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const router = useRouter();

  const { isLogged } = useAppSelector((state) => state.user);

  if (isLogged) {
    router.push("/your-pokemon");
  }

  return (
    <>
      <LoginPageStyled>
        <h2 className={mainFont.className}>Log in</h2>
        <LoginForm />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
