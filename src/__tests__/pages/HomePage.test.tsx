import { screen } from "@testing-library/react";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import { mockWithPokemonListUserPokemonState } from "../../mocks/storeMocks/storeMocks";
import HomePage from "../../pages";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the Home page", () => {
  describe("When rendered", () => {
    test("Then it should show the page title 'Home' on a heading", () => {
      const expectedTitle = "Home";

      renderWithProviders(<HomePage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When there's a list of two pokemon on the store", () => {
    test("Then is should show a card with the second of those pokemon's name: 'Pokemito'", () => {
      renderWithProviders(<HomePage />, {
        pokemon: mockWithPokemonListUserPokemonState,
      });

      const pokemonCard = screen.getByRole("heading", {
        name: `${mockUserPokemonList[1].name}`,
      });

      expect(pokemonCard).toBeInTheDocument();
    });
  });
});
