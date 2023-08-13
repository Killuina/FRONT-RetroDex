import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../store/hooks";
import { secondaryFont } from "../../styles/fonts";
import Link from "next/link";
import AuthenticationPageStyled from "../../styles/shared/AuthenticationPageStyled";

const LoginPage = (): JSX.Element => {
  const router = useRouter();

  const { isLogged } = useAppSelector((state) => state.user);

  if (isLogged) {
    router.push("/your-pokemon");
  }

  return (
    <AuthenticationPageStyled>
      <h2>Log in</h2>
      <LoginForm />
      <div className={`${secondaryFont.className} page__link`}>
        <span>New here? </span>
        <Link href={"/register"}>Register</Link>
      </div>
    </AuthenticationPageStyled>
  );
};

export default LoginPage;
