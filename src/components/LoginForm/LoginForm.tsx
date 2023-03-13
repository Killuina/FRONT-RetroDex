import { useState } from "react";
import useUser from "../../hooks/userUser/useUser";
import { secondaryFont } from "../../pages/_app";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [userLoginCredentials, setUserLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const areAreaFieldsEmpty =
    userLoginCredentials.username === "" ||
    userLoginCredentials.password === "";

  const handleUserLoginCredentials = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserLoginCredentials({
      ...userLoginCredentials,
      [id]: value,
    });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginUser(userLoginCredentials);
  };

  return (
    <LoginFormStyled
      className={`${secondaryFont.className} "login-form"`}
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="username">Username</label>
      <input
        className="login-form__field"
        type="text"
        autoComplete="off"
        id="username"
        value={userLoginCredentials.username}
        onChange={handleUserLoginCredentials}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        className="login-form__field"
        autoComplete="on"
        type="password"
        id="password"
        value={userLoginCredentials.password}
        onChange={handleUserLoginCredentials}
      />
      <button className="login-form__button" disabled={areAreaFieldsEmpty}>
        Sign in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
