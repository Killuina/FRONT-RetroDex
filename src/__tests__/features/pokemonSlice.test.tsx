import { mockUserPokemonList as mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import {
  loadPokemonActionCreator,
  pokemonReducer,
} from "../../store/features/pokemon/pokemonSlice";
import { UserPokemonList } from "../../store/features/pokemon/types";

describe("Given the pokemonReducer reducer", () => {
  describe("When it receives the action to loadPokemon and a list of two pokemon", () => {
    test("Then it should change pokemonListState to a list of this two pokemon", () => {
      const currentUserPokemonListState: UserPokemonList = [];

      const loadUserPokemonAction =
        loadPokemonActionCreator(mockUserPokemonList);

      const newUserPokemonListState = pokemonReducer(
        currentUserPokemonListState,
        loadUserPokemonAction
      );

      expect(newUserPokemonListState).toStrictEqual(mockUserPokemonList);
    });
  });
});
