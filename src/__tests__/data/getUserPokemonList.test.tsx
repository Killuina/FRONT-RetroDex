import getUserPokemonList from "../../data/getUserPokemonList";
import { GetUserPokemonList } from "../../data/types";
import { errorHandlers } from "../../mocks/handlers";
import { mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import { server } from "../../mocks/server";

describe("Given the getUserPokemonList function", () => {
  describe("When it is called and the response is ok", () => {
    test("Then it should return props with the requested userPokemonList and no errors or messages", async () => {
      const expectedProps: GetUserPokemonList = {
        props: {
          userPokemonList: mockUserPokemonList,
          isError: false,
          errorMessage: "",
        },
      };

      const props = await getUserPokemonList();

      expect(props).toStrictEqual(expectedProps);
    });
  });

  describe("When it is called and the response is not ok", () => {
    beforeEach(() => server.use(...errorHandlers));

    test("Then it should return props with an empty list, error, and an error message: 'Error getting Pokémon'", async () => {
      const expectedProps: GetUserPokemonList = {
        props: {
          userPokemonList: [],
          isError: true,
          errorMessage: "Error getting Pokémon",
        },
      };

      const props = await getUserPokemonList();

      expect(props).toStrictEqual(expectedProps);
    });
  });
});
