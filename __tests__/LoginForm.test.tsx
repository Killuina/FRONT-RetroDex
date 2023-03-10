import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../src/utils/testUtils/renderWithProviders";
import LoginForm from "../src/components/LoginForm/LoginForm";

describe("Given the LoginForm component", () => {
  describe("When it renders", () => {
    test("Then is shoulw show a field with label 'Username'", () => {
      const expectedLabel = "Username";
      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(expectedLabel);

      expect(usernameField).toBeInTheDocument();
    });

    test("Then is shoulw show a field with label 'Password'", () => {
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

      await act(
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

      await act(
        async () => await userEvent.type(usernameField, expectedFieldValue)
      );

      expect(usernameField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user clicks 'Sign in' button", () => {
    test("Then it should reset the value of username's field", async () => {
      const usernameLabel = "Username";
      const expectedFieldValue = "";
      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(usernameLabel);
      const loginButton = screen.getByRole("button", { name: "Sign in" });

      await act(async () => await userEvent.click(loginButton));

      expect(usernameField).toHaveValue(expectedFieldValue);
    });

    test("Then it should reset the value of password's field", async () => {
      const passwordLabel = "Password";
      const expectedFieldValue = "";
      renderWithProviders(<LoginForm />);

      const passwordField = screen.getByLabelText(passwordLabel);
      const loginButton = screen.getByRole("button", { name: "Sign in" });

      await act(async () => await userEvent.click(loginButton));

      expect(passwordField).toHaveValue(expectedFieldValue);
    });
  });

  describe("When the user writes on both Username's and Password's fields", () => {
    test("Then it should change the value of both fields", async () => {
      const usernameLabel = "Username";
      const expectedUsernameFieldValue = "manolo";
      const passwordLabel = "Password";
      const expectedPasswordFieldValue = "manolo1234";

      renderWithProviders(<LoginForm />);

      const usernameField = screen.getByLabelText(usernameLabel);
      const passwordField = screen.getByLabelText(passwordLabel);

      await act(async () => {
        await userEvent.type(usernameField, expectedUsernameFieldValue),
          await userEvent.type(passwordField, expectedPasswordFieldValue);
      });

      expect(usernameField).toHaveValue(expectedUsernameFieldValue);
      expect(passwordField).toHaveValue(expectedPasswordFieldValue);
    });
  });
});
