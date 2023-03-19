import { mockUserPokemonList as mockUserPokemonList } from "../../mocks/pokemonMocks/pokemonMock";
import {
  addUserPokemonActionCreator,
  deleteUserPokemonActionCreator,
  loadUserPokemonActionCreator,
  pokemonReducer,
} from "../../store/features/userPokemon/pokemonSlice";
import {
  UserPokemon,
  UserPokemonList,
} from "../../store/features/userPokemon/types";

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

  describe("When it receives the action to delete the first pokemon on the list: 'Pokamion' with id: '1', and a list of two pokemon", () => {
    test("Then it should return the list of Pokémon with Pokamion deleted", () => {
      const currentUserPokemonListState: UserPokemonList = mockUserPokemonList;
      const expectedUserPokemonListState: UserPokemonList = [
        mockUserPokemonList[1],
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

  describe("When it receives the action to add a new pokemon named 'Pokamion 2', and a list of two pokemon", () => {
    test("Then it should return the list of Pokémon with 'Pokamion' in it", () => {
      const newUserPokemon: UserPokemon = {
        id: "3",
        name: "Pokamion 2",
        types: ["Water", "Rock"],
        ability: "Loco",
        height: "2",
        weight: "3",
        baseExp: "4",
        imageUrl: "/pokamion2.png",
        backupImageUrl:
          "https://whvdnqxlctrpqnppjuwd.supabase.co/storage/v1/object/public/pokemon/pokamion2.webp",
        createdBy: "63fa113cda52dff28b261e0a",
      };
      const currentUserPokemonListState: UserPokemonList = mockUserPokemonList;
      const expectedUserPokemonListState: UserPokemonList = [
        mockUserPokemonList[0],
        mockUserPokemonList[1],
        newUserPokemon,
      ];

      const addUserPokemonAction = addUserPokemonActionCreator(newUserPokemon);

      const newUserPokemonListState = pokemonReducer(
        currentUserPokemonListState,
        addUserPokemonAction
      );

      expect(newUserPokemonListState).toStrictEqual(
        expectedUserPokemonListState
      );
    });
  });
});
