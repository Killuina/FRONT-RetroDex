import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given the LoginForm component", () => {
  describe("When it renders", () => {
    test("Then is shoulw show a field with label 'Username'", () => {
      const expectedLabel = "Username";
      render(<LoginForm />);

      const usernameField = screen.getByLabelText(expectedLabel);

      expect(usernameField).toBeInTheDocument();
    });

    test("Then is shoulw show a field with label 'Password'", () => {
      const expectedLabel = "Password";
      render(<LoginForm />);

      const passwordField = screen.getByLabelText(expectedLabel);

      expect(passwordField).toBeInTheDocument();
    });
  });

  describe("When the user writes on Username's input field", () => {
    test("Then it should change the value of username's input", async () => {
      const usernameLabel = "Username";
      const expectedInputValue = "manolo";
      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(usernameLabel);

      await act(
        async () => await userEvent.type(usernameInput, expectedInputValue)
      );

      expect(usernameInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When the user writes on Password's input field", () => {
    test("Then it should change the value of password's input", async () => {
      const passwordLabel = "Password";
      const expectedInputValue = "manolo1234";
      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(passwordLabel);

      await act(
        async () => await userEvent.type(usernameInput, expectedInputValue)
      );

      expect(usernameInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When the user clicks 'Sign in' button", () => {
    test("Then it should reset the value of username's input field", async () => {
      const usernameLabel = "Username";
      const expectedInputValue = "";
      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const loginButton = screen.getByRole("button", { name: "Sign in" });

      await act(async () => await userEvent.click(loginButton));

      expect(usernameInput).toHaveValue(expectedInputValue);
    });

    test("Then it should reset the value of password's input field", async () => {
      const passwordLabel = "Password";
      const expectedInputValue = "";
      render(<LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginButton = screen.getByRole("button", { name: "Sign in" });

      await act(async () => await userEvent.click(loginButton));

      expect(passwordInput).toHaveValue(expectedInputValue);
    });
  });
});
