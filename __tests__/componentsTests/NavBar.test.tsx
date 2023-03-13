import { screen } from "@testing-library/react";
import NavBar from "../../src/components/NavBar/NavBar";
import renderWithProviders from "../../src/utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link that says 'to Home page'", () => {
      renderWithProviders(<NavBar />);

      const homeLink = screen.getByRole("link", { name: /to home page/i });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show a link that says 'to My Pokémon page'", () => {
      renderWithProviders(<NavBar />);

      const myPokemonLink = screen.getByRole("link", {
        name: /to my pokémon page/i,
      });

      expect(myPokemonLink).toBeInTheDocument();
    });

    test("Then it should show a link that says 'to Create Pokémon page'", () => {
      renderWithProviders(<NavBar />);

      const createPokemonLink = screen.getByRole("link", {
        name: /to create pokémon page/i,
      });

      expect(createPokemonLink).toBeInTheDocument();
    });

    test("Then it should show a link that says 'to Login page'", () => {
      renderWithProviders(<NavBar />);

      const loginLink = screen.getByRole("link", {
        name: /to login page/i,
      });

      expect(loginLink).toBeInTheDocument();
    });
  });
});
