import { useState } from "react";
import useUser from "../../hooks/userUser/useUser";
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

    setUserLoginCredentials({ username: "", password: "" });
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={onSubmitHandler}>
      <label htmlFor="username" className="login-form__field">
        Username
        <input
          type="text"
          autoComplete="off"
          id="username"
          value={userLoginCredentials.username}
          onChange={handleUserLoginCredentials}
        ></input>
      </label>
      <label htmlFor="password" className="login-form__field">
        Password
        <input
          autoComplete="on"
          type="password"
          id="password"
          value={userLoginCredentials.password}
          onChange={handleUserLoginCredentials}
        />
      </label>
      <button className="login-form__button" disabled={areAreaFieldsEmpty}>
        Sign in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
