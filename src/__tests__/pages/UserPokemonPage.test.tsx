import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Layout from "../../components/Layout/Layout";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import {
  mockLoggedUserState,
  mockWithNoPokemonUserPokemonState,
  mockWithOnePokemonUserPokemonState,
  mockWithPokemonListUserPokemonState,
} from "../../mocks/storeMocks/storeMocks";
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

  describe("When being rendered with a list of two pokemon on the store", () => {
    test("Then is should show a card with the first of those pokemon's name: 'Pokamion'", () => {
      renderWithProviders(<UserPokemonListPage />, {
        pokemon: mockWithPokemonListUserPokemonState,
      });

      const pokemonCard = screen.getByRole("heading", {
        name: `${mockUserPokemonList[0].name}`,
      });

      expect(pokemonCard).toBeInTheDocument();
    });
  });

  describe("When being rendered with a list of one pokemon on the store, and the logged user deletes that pokemon", () => {
    test("Then it should show a modal with message: 'Pokémon deleted!'", async () => {
      const expectedMessage = "Pokémon deleted!";

      renderWithProviders(
        <Layout>
          <UserPokemonListPage />
        </Layout>,
        {
          pokemon: mockWithOnePokemonUserPokemonState,
          user: mockLoggedUserState,
        }
      );

      const deleteButton = screen.getByRole("button", {
        name: /delete pokemon/i,
      });

      await userEvent.click(deleteButton);

      const modal = await screen.findByText(expectedMessage);

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When there's an empty list in the store", () => {
    test("Then it should show message: 'No results found'", () => {
      const expectedMessage = "No results found";

      renderWithProviders(<UserPokemonListPage />, {
        pokemon: mockWithNoPokemonUserPokemonState,
        user: mockLoggedUserState,
      });

      const message = screen.getByText(expectedMessage);

      expect(message).toBeInTheDocument();
    });
  });
});
