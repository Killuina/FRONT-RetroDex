import { screen, waitFor } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";
import { errorHandlers } from "../../mocks/handlers";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import { server } from "../../mocks/server";
import { mockErrorUiState } from "../../mocks/storeMocks/storeMocks";
import PokemonDetailPage from "../../pages/pokemon/[id]";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock/async"));

const pokemonDetail = mockUserPokemonList[0];

const useRouter = jest.spyOn(require("next-router-mock/async"), "useRouter");

useRouter.mockImplementation(() => ({
  query: {
    id: mockUserPokemonList[0].id,
  },
}));

describe("Given the PokemonDetailPage", () => {
  describe("When rendering a pokémon named 'Pokamion'", () => {
    test("Then it should show the image of Pokamion", async () => {
      const expectedImageName = pokemonDetail.name;

      renderWithProviders(
        <PokemonDetailPage
          errorMessage=""
          isError={false}
          pokemon={pokemonDetail}
        />
      );

      const image = screen.getByRole("img", {
        name: expectedImageName,
      });

      expect(image).toBeInTheDocument();
    });

    test("Then it should Pokamion's name on a heading", () => {
      const expectedName = pokemonDetail.name;

      renderWithProviders(
        <PokemonDetailPage
          errorMessage=""
          isError={false}
          pokemon={pokemonDetail}
        />
      );

      const pokemonName = screen.getByRole("heading", {
        name: expectedName,
      });

      expect(pokemonName).toBeInTheDocument();
    });
  });

  describe("When it receives an error", () => {
    test("Then it should should error modal", async () => {
      server.use(...errorHandlers);

      renderWithProviders(
        <Layout>
          <PokemonDetailPage errorMessage="" isError pokemon={pokemonDetail} />
        </Layout>,
        { ui: mockErrorUiState }
      );

      const modal = await screen.findByRole("alert");

      expect(modal).toBeInTheDocument();
    });
  });
});
