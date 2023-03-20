import { errorHandlers } from "../../mocks/handlers";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import { server } from "../../mocks/server";
import {
  getPokemonDetailData,
  getPokemonListData,
} from "../../utils/dataUtils/dataUtils";
import {
  PokemonDetailProps,
  PokemonListProps,
} from "../../utils/dataUtils/types";

describe("Given the getPokemonListData function", () => {
  describe("When it is called and the response is ok", () => {
    test("Then it should return props with the requested pokemonList and no errors or messages", async () => {
      const expectedProps: PokemonListProps = {
        props: {
          pokemonList: mockUserPokemonList,
          isError: false,
          errorMessage: "",
        },
      };

      const props = await getPokemonListData();

      expect(props).toStrictEqual(expectedProps);
    });
  });

  describe("When it is called and the response is not ok", () => {
    test("Then it should return props with an empty list, error, and an error message: 'Error getting Pokémon'", async () => {
      server.use(...errorHandlers);

      const expectedProps: PokemonListProps = {
        props: {
          pokemonList: [],
          isError: true,
          errorMessage: "Error getting Pokémon",
        },
      };

      const props = await getPokemonListData();

      expect(props).toStrictEqual(expectedProps);
    });
  });
});

describe("Given the getPokemonDetailData function", () => {
  describe("When it is called and the response is ok", () => {
    test("Then it should return props with the requested pokemon data and no errors or messages", async () => {
      const expectedProps: PokemonDetailProps = {
        props: {
          pokemon: mockUserPokemonList[0],
          isError: false,
          errorMessage: "",
        },
        revalidate: 10,
      };

      const props = await getPokemonDetailData(mockUserPokemonList[0].id);

      expect(props).toStrictEqual(expectedProps);
    });
  });

  describe("When it is called and the response is not ok", () => {
    test("Then it should return props with a pokemon with no data, an error, and an error message: 'Error getting Pokémon'", async () => {
      server.use(...errorHandlers);

      const expectedProps: PokemonDetailProps = {
        props: {
          pokemon: {
            ability: "",
            backupImageUrl: "",
            baseExp: "",
            createdBy: "",
            height: "",
            id: "",
            imageUrl: "",
            name: "",
            types: [],
            weight: "",
          },
          isError: true,
          errorMessage: "Error getting Pokémon detail",
        },
        revalidate: 10,
      };

      const props = await getPokemonDetailData(mockUserPokemonList[0].id);

      expect(props).toStrictEqual(expectedProps);
    });
  });
});
