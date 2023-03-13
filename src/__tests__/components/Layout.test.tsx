import { screen } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";
import { mockLoadingUiState } from "../../mocks/storeMocks/storeMocks";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show the link that leads to home page on the NavBar component", () => {
      renderWithProviders(<Layout />);

      const homeLink = screen.getByRole("link", { name: /to home page/i });

      expect(homeLink).toBeInTheDocument();
    });
  });

  describe("When the page is loading", () => {
    test("Then it should show the loader", () => {
      renderWithProviders(<Layout />, { ui: mockLoadingUiState });

      const loader = screen.getByRole("dialog", {
        name: "page is loading...",
      });

      expect(loader).toBeInTheDocument();
    });
  });
});
