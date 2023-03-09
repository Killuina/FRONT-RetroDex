import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [username] = useState("");
  const [password] = useState("");

  const isUsernameFieldEmpty = username === "";
  const isPasswordFieldEmpty = password === "";

  return (
    <LoginFormStyled>
      <FormControl
        className="login-form"
        isInvalid={isUsernameFieldEmpty}
        fontFamily="form"
        bg="primary.100"
      >
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" type="text" bg="white" />

        {isUsernameFieldEmpty ? (
          <FormErrorMessage className="form-error-message">
            Username is required
          </FormErrorMessage>
        ) : (
          ""
        )}
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" bg="white" autoComplete="on" />
        {isPasswordFieldEmpty ? (
          <FormErrorMessage className="form-error-message">
            Password is required
          </FormErrorMessage>
        ) : (
          ""
        )}
        <Button type="submit">Sign in</Button>
      </FormControl>
    </LoginFormStyled>
  );
};

export default LoginForm;
