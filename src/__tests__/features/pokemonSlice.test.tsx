import { mockUserPokemonList as mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import {
  deleteUserPokemonActionCreator,
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

  describe("When it receives the action to delete the first pokemon on the list: 'Pokamion' with id: '1'", () => {
    test("Then it should return the list of Pokémon with Pokamion deleted", () => {
      const currentUserPokemonListState: UserPokemonList = mockUserPokemonList;
      const expectedUserPokemonListState: UserPokemonList = [
        {
          id: "2",
          name: "Pokemito",
          types: ["Xikito"],
          ability: "Xikito",
          height: 0,
          weight: 0,
          baseExp: 0,
          imageUrl: "/pokemito.png",
          backupImageUrl:
            "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokemito.webp",
          createdBy: "63fa113cda52dff28b261e0a",
        },
      ];

      const deleteUserPokemonAction = deleteUserPokemonActionCreator(
        mockUserPokemonList[0].id
      );

      const newUserPokemonListState = pokemonReducer(
        currentUserPokemonListState,
        deleteUserPokemonAction
      );

      expect(newUserPokemonListState).toStrictEqual(
        expectedUserPokemonListState
      );
    });
  });
});
