import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import Link from "next/link";
import { secondaryFont } from "../../styles/fonts";
import AuthenticationPageStyled from "../../styles/shared/AuthenticationPageStyled";

const RegisterPage = (): React.ReactElement => {
  return (
    <AuthenticationPageStyled>
      <div className="page-heading">
        <h2 className="page-heading__title">Welcome to Pokédex</h2>
        <span className={`${secondaryFont.className} page-heading__subtitle`}>
          Create your own custom Pokémon and become a real Pokémon trainer!
        </span>
      </div>
      <div className="auth-form-container">
        <RegisterForm />
        <div className={`${secondaryFont.className} page__link`}>
          <span>Already have an account? </span>
          <Link href="/login">Log in</Link>
        </div>
      </div>
    </AuthenticationPageStyled>
  );
};

export default RegisterPage;
