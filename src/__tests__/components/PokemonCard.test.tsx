import { screen } from "@testing-library/react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { mockUserPokemon } from "../../mocks/pokemonMocks/pokemonMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given the PokemonCard component", () => {
  describe("When it receives a Pokemon with name 'Pokamion', an image of 'Pokamion', and type 'Pesao'", () => {
    test("Then it should show 'Pokamion' on a heading", () => {
      renderWithProviders(<PokemonCard Pokemon={mockUserPokemon} />);

      const pokemonCard = screen.getByRole("heading", {
        name: `${mockUserPokemon.name}`,
      });

      expect(pokemonCard).toBeInTheDocument();
    });

    test("Then it should show 'Pokamion' on image's alternative text", () => {
      renderWithProviders(<PokemonCard Pokemon={mockUserPokemon} />);

      const pokemonCard = screen.getByAltText(`${mockUserPokemon.name}`);

      expect(pokemonCard).toBeInTheDocument();
    });

    test("Then it should show 'Type:Pesao'", () => {
      renderWithProviders(<PokemonCard Pokemon={mockUserPokemon} />);

      const pokemonCard = screen.getByText(`Type:${mockUserPokemon.types}`);

      expect(pokemonCard).toBeInTheDocument();
    });
  });
});
