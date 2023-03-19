import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { mockUserPokemon } from "../../mocks/pokemonMocks/pokemonMock";
import { mockLoggedUserState } from "../../mocks/storeMocks/storeMocks";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

const mockDeleteUserPokemon = jest.fn();

jest.mock("../../hooks/usePokemon/usePokemon", () => () => ({
  deleteUserPokemon: mockDeleteUserPokemon,
}));

describe("Given the PokemonCard component", () => {
  describe("When it receives a Pokemon with name 'Pokamion', an image of 'Pokamion', and type 'Pesao'", () => {
    test("Then it should show 'Pokamion' on a heading", () => {
      renderWithProviders(<PokemonCard pokemon={mockUserPokemon} />);

      const pokemonCard = screen.getByRole("heading", {
        name: `${mockUserPokemon.name}`,
      });

      expect(pokemonCard).toBeInTheDocument();
    });

    test("Then it should show 'Pokamion' on image's alternative text", () => {
      renderWithProviders(<PokemonCard pokemon={mockUserPokemon} />);

      const pokemonCard = screen.getByAltText(`${mockUserPokemon.name}`);

      expect(pokemonCard).toBeInTheDocument();
    });

    test("Then it should show 'Types:Pesao/Pesadito'", () => {
      renderWithProviders(<PokemonCard pokemon={mockUserPokemon} />);

      const pokemonCard = screen.getByText(
        `Type:${mockUserPokemon.types[0]}/${mockUserPokemon.types[1]}`
      );

      expect(pokemonCard).toBeInTheDocument();
    });
  });

  describe("When  it receives a Pokemon with name 'Pokamion' and the logged user clicks on its delete button", () => {
    test("Then it should call deletePokemon with Pokamion's id", async () => {
      renderWithProviders(<PokemonCard pokemon={mockUserPokemon} />, {
        user: mockLoggedUserState,
      });

      const deleteButton = screen.getByRole("button", {
        name: /delete pokemon/i,
      });

      await userEvent.click(deleteButton);

      expect(mockDeleteUserPokemon).toBeCalledWith(mockUserPokemon.id);
    });
  });
});
