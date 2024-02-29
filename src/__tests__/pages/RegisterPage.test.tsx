import { screen } from "@testing-library/react";
import RegisterPage from "../../pages/register";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the Register Page", () => {
  describe("When rendered", () => {
    test("Then it should show a link to login page", () => {
      renderWithProviders(<RegisterPage />);

      const loginPageLink = screen.getByRole("link", { name: /log in/i });

      expect(loginPageLink).toBeInTheDocument();
    });
  });
});
