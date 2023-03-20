import { useState } from "react";
import useUser from "../../hooks/userUser/useUser";
import { secondaryFont } from "../../styles/fonts";
import FormStyled from "../../styles/FormStyled";

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
    <FormStyled
      className={`${secondaryFont.className} form`}
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="username">Username</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="username"
        value={userLoginCredentials.username}
        onChange={handleUserLoginCredentials}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        className="form__field"
        autoComplete="on"
        type="password"
        id="password"
        value={userLoginCredentials.password}
        onChange={handleUserLoginCredentials}
      />
      <button className="form__button" disabled={areAreaFieldsEmpty}>
        Sign in
      </button>
    </FormStyled>
  );
};

export default LoginForm;
