import { mockUserPokemonList as mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import {
  loadUserPokemonActionCreator,
  pokemonReducer,
} from "../../store/features/userPokemon/pokemonSlice";
import { UserPokemonList } from "../../store/features/userPokemon/types";

describe("Given the pokemonReducer reducer", () => {
  describe("When it receives the action to loadPokemon and a list of two pokemon", () => {
    test("Then it should change pokemonListState to a list of this two pokemon", () => {
      const currentUserPokemonListState: UserPokemonList = [];

      const loadUserPokemonAction =
        loadUserPokemonActionCreator(mockUserPokemonList);

      const newUserPokemonListState = pokemonReducer(
        currentUserPokemonListState,
        loadUserPokemonAction
      );

      expect(newUserPokemonListState).toStrictEqual(mockUserPokemonList);
    });
  });
});
