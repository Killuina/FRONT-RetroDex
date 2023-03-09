import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
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
          id="username"
          type="text"
          bg="white"
          value={userLoginCredentials.username}
          onChange={handleUserLoginCredentials}
        />

        {isUsernameFieldEmpty ? (
          <FormErrorMessage className="form-message">
            Username is required
          </FormErrorMessage>
        ) : (
          <FormHelperText className="form-message">
            Your username is the best
          </FormHelperText>
        )}
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          bg="white"
          autoComplete="on"
          value={userLoginCredentials.password}
          onChange={handleUserLoginCredentials}
        />
        {isUsernameFieldEmpty ? (
          <FormErrorMessage className="form-message">
            Password is required
          </FormErrorMessage>
        ) : (
          <FormHelperText className="form-message">
            Your password is even better
          </FormHelperText>
        )}
        <Button type="submit">Sign in</Button>
      </FormControl>
    </LoginFormStyled>
  );
};

export default LoginForm;
