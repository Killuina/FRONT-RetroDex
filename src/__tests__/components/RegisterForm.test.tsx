import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import userEvent from "@testing-library/user-event";
import invalidFieldMessages from "../../data/invalidValidationMessages";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the Register Form", () => {
  describe("When the user writes on all form fields and they are valid", () => {
    test("Then it should enable de Sign up button", async () => {
      const userCredentials = {
        email: "test@test.com",
        username: "User1234",
        password: "test1234@",
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

  describe("When the user writes invalid username, email and password", () => {
    test("Then Sign Up button should be disabled and it should show each error messages on each field", async () => {
      const invalidUserCredentials = {
        email: "testtest.com",
        username: "User",
        password: "test",
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

      await userEvent.type(emailField, invalidUserCredentials.email);
      await userEvent.type(usernameField, invalidUserCredentials.username);
      await userEvent.type(passwordField, invalidUserCredentials.password);

      const fieldWithInvalidUsernameMessage = await screen.findByRole(
        "textbox",
        {
          description: invalidFieldMessages.username.tooShort,
        }
      );

      const fieldWithInvalidEmailMessage = await screen.findByRole("textbox", {
        description: invalidFieldMessages.email.wrongFormat,
      });

      expect(fieldWithInvalidEmailMessage).toBeInTheDocument();

      expect(fieldWithInvalidUsernameMessage).toBeInTheDocument();

      expect(signUpButton).toBeDisabled();
    });
  });
});
