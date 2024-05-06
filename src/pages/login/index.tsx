import { useRouter } from "next/router";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
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
      <div className="page-heading">
        <h2 className="page-heading__title">
          Welcome to <strong>RetroDex</strong>
        </h2>
        <span className={`${secondaryFont.className} page-heading__subtitle`}>
          Create your own custom Pokémon and become a real Pokémon trainer!
        </span>
      </div>
      <div className="auth-form-container">
        <LoginForm />
        <div className={`${secondaryFont.className} page__link`}>
          <span>New here? </span>
          <Link href={"/register"}>Sign up</Link>
        </div>
      </div>
    </AuthenticationPageStyled>
  );
};

export default LoginPage;
