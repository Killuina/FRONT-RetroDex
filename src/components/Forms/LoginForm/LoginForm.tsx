import { useState } from "react";
import useUser from "../../../hooks/userUser/useUser";
import { secondaryFont } from "../../../styles/fonts";
import FormStyled from "../../../styles/shared/FormStyled";
import OpenedEyeIcon from "../../Icons/OpenedEyeIcon";
import ClosedEyeIcon from "../../Icons/ClosedEyeIcon";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [userLoginCredentials, setUserLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const areAreaFieldsEmpty =
    userLoginCredentials.username === "" ||
    userLoginCredentials.password === "";

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
    <FormStyled className={`${secondaryFont.className}`}>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="field-container">
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            className="field"
            type="text"
            autoComplete="off"
            id="username"
            value={userLoginCredentials.username}
            onChange={handleUserLoginCredentials}
          />
        </div>
        <div className="field-container">
          <label htmlFor="password">Password</label>
          <input
            className="field field--password"
            autoComplete="on"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            value={userLoginCredentials.password}
            onChange={handleUserLoginCredentials}
          />
          <button
            className="field__icon"
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            aria-label="Show Password"
          >
            {isPasswordVisible ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
          </button>
        </div>
        <button className="form__button" disabled={areAreaFieldsEmpty}>
          Log in
        </button>
      </form>
    </FormStyled>
  );
};

export default LoginForm;
