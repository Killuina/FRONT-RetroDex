import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import userEvent from "@testing-library/user-event";

describe("Given the Register Form", () => {
  describe("When the user writes on all form fields", () => {
    test("Then it should enable de Sign up button", async () => {
      const userCredentials = {
        email: "test@test.com",
        username: "test",
        password: "test1234",
      };

      const passwordLabel = "Password";
      const emailLabel = "Email";
      const usernameLabel = "Username";
      const signUpButtonText = "Sign up";

      renderWithProviders(<RegisterForm />);

      const usernameField = screen.getByLabelText(usernameLabel);
      const passwordField = screen.getByLabelText(passwordLabel);
      const emailField = screen.getByLabelText(emailLabel);
      const signUpButton = screen.getByRole("button", {
        name: signUpButtonText,
      });

      await userEvent.type(emailField, userCredentials.email);
      await userEvent.type(usernameField, userCredentials.username);
      await userEvent.type(passwordField, userCredentials.password);

      expect(signUpButton).toBeEnabled();
    });
  });
});
