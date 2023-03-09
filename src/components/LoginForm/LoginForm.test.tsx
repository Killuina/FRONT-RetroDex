import { render, screen } from "@testing-library/react";
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
});
