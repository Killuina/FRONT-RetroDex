import { screen } from "@testing-library/react";
import { GetStaticPropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/Layout/Layout";
import { errorHandlers } from "../../mocks/handlers";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import { server } from "../../mocks/server";
import { mockErrorUiState } from "../../mocks/storeMocks/storeMocks";
import PokemonDetailPage, {
  getStaticPaths,
  getStaticProps,
} from "../../pages/pokemon/[id]";
import { PokemonDetailProps } from "../../utils/dataUtils/types";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

const useRouter = jest.spyOn(require("next-router-mock/async"), "useRouter");

jest.mock("next/router", () => require("next-router-mock/async"));

jest.mock("../../utils/dataUtils/dataUtils", () => ({
  getPokemonListData: jest.fn().mockResolvedValue({
    props: {
      pokemonList: mockUserPokemonList,
      errorMessage: "",
      isError: true,
    },
    revalidate: 10,
  }),
  getPokemonDetailData: jest.fn().mockResolvedValue({
    props: { pokemon: mockUserPokemonList[0], errorMessage: "", isError: true },
    revalidate: 10,
  }),
}));

useRouter.mockImplementation(() => ({
  query: {
    id: mockUserPokemonList[0].id,
  },
}));

const pokemonDetail = mockUserPokemonList[0];

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

describe("Given a getStaticProps function", () => {
  describe("When called with Pokamion's id and the fetch is ok", () => {
    test("Then it should return a props object with that pokemon, no error, and no message", async () => {
      const expectedProps: PokemonDetailProps = {
        props: { pokemon: pokemonDetail, errorMessage: "", isError: true },
        revalidate: 10,
      };
      const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {
        params: {
          id: pokemonDetail.id,
        },
      };

      const props = await getStaticProps(context);

      expect(props).toStrictEqual(expectedProps);
    });
  });
});

describe("Given a getStaticPaths function that fetches the paths for a list of pokemon", () => {
  describe("When called", () => {
    test("Then it should return a props object with the paths for that list of pokemons, based on their id's", async () => {
      const expectedPaths = {
        paths: [
          { params: { id: mockUserPokemonList[0].id } },
          { params: { id: mockUserPokemonList[1].id } },
        ],
        fallback: "blocking",
      };

      const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {};

      const paths = await getStaticPaths(context);

      expect(paths).toStrictEqual(expectedPaths);
    });
  });
});
