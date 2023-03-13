import { screen } from "@testing-library/react";
import Header from "../../components/Header/Header";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should render Pokédex logo", () => {
      renderWithProviders(<Header />);

      const pokedexLogo = screen.getByAltText(/pokédex logo/i);

      expect(pokedexLogo).toBeInTheDocument();
    });

    test("Then it should show app title 'Pokédex' on a heading", () => {
      renderWithProviders(<Header />);

      const pokedexTitle = screen.getByRole("heading", { name: /pokédex/i });

      expect(pokedexTitle).toBeInTheDocument();
    });
  });
});
