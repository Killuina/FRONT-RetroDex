import { screen } from "@testing-library/react";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import UserPokemonListPage from "../../pages/your-pokemon";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given the UserPokemonPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the page title 'Your Pokémon' on a heading", () => {
      const expectedTitle = "Your Pokémon";

      renderWithProviders(<UserPokemonListPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it receves a list of pokemon by ServerSideProps with no errors or messages", () => {
    test("Then is should show a card with the first of those pokemon's name: 'Pokamion'", () => {
      renderWithProviders(<UserPokemonListPage />, {
        pokemon: mockUserPokemonList,
      });

      const pokemonCard = screen.getByRole("heading", {
        name: `${mockUserPokemonList[0].name}`,
      });

      expect(pokemonCard).toBeInTheDocument();
    });
  });
});
