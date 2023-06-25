import { useState } from "react";
import { secondaryFont } from "../../styles/fonts";
import FormStyled from "../../styles/shared/FormStyled";
import { UserCredentials } from "../../hooks/types";

const RegisterForm = (): React.ReactElement => {
  const initialUserCredentials: UserCredentials = {
    email: "",
    password: "",
    username: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const areAreaFieldsEmpty =
    !userCredentials.email ||
    !userCredentials.username ||
    !userCredentials.password;

  const handleUserCredentials = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({ ...userCredentials, [id]: value });
  };

  return (
    <FormStyled className={`${secondaryFont.className} form`}>
      <label htmlFor="email">Email</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="email"
        value={userCredentials.email}
        onChange={handleUserCredentials}
      ></input>
      <label htmlFor="username">Username</label>
      <input
        className="form__field"
        type="text"
        autoComplete="off"
        id="username"
        value={userCredentials.username}
        onChange={handleUserCredentials}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        className="form__field"
        autoComplete="on"
        type="password"
        id="password"
        value={userCredentials.password}
        onChange={handleUserCredentials}
      />
      <button className="form__button" disabled={areAreaFieldsEmpty}>
        Sign up
      </button>
    </FormStyled>
  );
};

export default RegisterForm;
