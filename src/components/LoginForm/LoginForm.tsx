import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import useUser from "../../hooks/userUser/useUser";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [userLoginCredentials, setUserLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const isUsernameFieldEmpty =
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
    <LoginFormStyled onSubmit={onSubmitHandler}>
      <FormControl
        className="login-form"
        isInvalid={isUsernameFieldEmpty}
        fontFamily="form"
        bg="primary.100"
      >
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          autoComplete="off"
          className="login-form__field"
          id={"username"}
          type="text"
          bg="white"
          value={userLoginCredentials.username}
          onChange={handleUserLoginCredentials}
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          className="login-form__field"
          id={"password"}
          type="password"
          bg="white"
          autoComplete="on"
          value={userLoginCredentials.password}
          onChange={handleUserLoginCredentials}
        />
        <Button type="submit">Sign in</Button>
      </FormControl>
    </LoginFormStyled>
  );
};

export default LoginForm;
