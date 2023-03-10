import { screen } from "@testing-library/react";
import LoginPage from "../login";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given the LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should render the page title 'Log in' on a heading", () => {
      const expectedLoginPageTitle = "Log in";

      renderWithProviders(<LoginPage />);

      const loginPageTitle = screen.getByRole("heading", {
        name: expectedLoginPageTitle,
      });

      expect(loginPageTitle).toBeInTheDocument();
    });
  });
});
