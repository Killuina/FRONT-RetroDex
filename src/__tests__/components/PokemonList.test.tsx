import { screen } from "@testing-library/react";
import PokemonList from "../../components/PokemonList/PokemonList";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given the PokemonList component", () => {
  describe("When it receives a list of two pokemon with name 'Pokamion' and 'Pokemito'", () => {
    test("Then it should render two cards with that names on headings", () => {
      const expectedNames = ["Pokamion", "Pokemito"];

      renderWithProviders(<PokemonList pokemonList={mockUserPokemonList} />);

      const pokamionCard = screen.getByRole("heading", {
        name: expectedNames[0],
      });

      const pokemitoCard = screen.getByRole("heading", {
        name: expectedNames[1],
      });

      expect(pokamionCard).toBeInTheDocument();
      expect(pokemitoCard).toBeInTheDocument();
    });
  });
});
