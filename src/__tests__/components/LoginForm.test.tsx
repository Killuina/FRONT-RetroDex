import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../components/LoginForm/LoginForm";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

const mockedSubmit = jest.fn();

jest.mock("../../hooks/userUser/useUser", () => () => ({
  loginUser: mockedSubmit,
}));

describe("Given the LoginForm component", () => {
  describe("When it renders", () => {
    test("Then is should show a field with label 'Username'", () => {
      const expectedLabel = "Username";
      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(expectedLabel);

      expect(usernameField).toBeInTheDocument();
    });

    test("Then is should show a field with label 'Password'", () => {
      const expectedLabel = "Password";
      renderWithProviders(<LoginForm />);

      const passwordField = screen.getByLabelText(expectedLabel);

      expect(passwordField).toBeInTheDocument();
    });
  });

  describe("When the user writes on Username's field", () => {
    test("Then it should change the value of username's field", async () => {
      const usernameLabel = "Username";
      const expectedFieldValue = "manolo";
      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(usernameLabel);

      await waitFor(
        async () => await userEvent.type(usernameField, expectedFieldValue)
      );

      expect(usernameField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes on Password's field", () => {
    test("Then it should change the value of password's field", async () => {
      const passwordLabel = "Password";
      const expectedFieldValue = "manolo1234";

      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(passwordLabel);

      await waitFor(
        async () => await userEvent.type(usernameField, expectedFieldValue)
      );

      expect(usernameField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user enters his username and password, and clicks on Sign in button", () => {
    test("Then it should call the loginUser function", async () => {
      const userCredentials = {
        username: "Manolo",
        password: "manolo1234",
      };
      const passwordLabel = "Password";
      const usernameLabel = "Username";
      const signInButtonText = "Sign in";

      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(usernameLabel);
      const passwordField = screen.getByLabelText(passwordLabel);
      const signInButton = screen.getByRole("button", {
        name: signInButtonText,
      });

      await userEvent.type(usernameField, userCredentials.username);
      await userEvent.type(passwordField, userCredentials.password);
      await userEvent.click(signInButton);

      expect(mockedSubmit).toHaveBeenCalledWith(userCredentials);
    });
  });
});
