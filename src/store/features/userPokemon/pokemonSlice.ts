import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPokemon, UserPokemonList, UserPokemonState } from "./types";

const initialPokemonList: UserPokemonList = [];

const initialPokemonDetail: UserPokemon = {
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
};

const initialState: UserPokemonState = {
  pokemonList: initialPokemonList,
  pokemonDetail: initialPokemonDetail,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadUserPokemon: (
      currentUserPokemonState,
      { payload }: PayloadAction<UserPokemonList>
    ): UserPokemonState => ({
      ...currentUserPokemonState,
      pokemonList: [...payload],
    }),
    deleteUserPokemon: (
      currentUserPokemonState,
      { payload }: PayloadAction<string>
    ): UserPokemonState => ({
      ...currentUserPokemonState,
      pokemonList: [
        ...currentUserPokemonState.pokemonList.filter(
          (pokemon) => pokemon.id !== payload
        ),
      ],
    }),

    addUserPokemon: (
      currentUserPokemonState,
      { payload }: PayloadAction<UserPokemon>
    ): UserPokemonState => ({
      ...currentUserPokemonState,
      pokemonList: [...currentUserPokemonState.pokemonList, payload],
    }),
    getPokemonDetail: (
      currentUserPokemonState,
      { payload }: PayloadAction<UserPokemon>
    ): UserPokemonState => ({
      ...currentUserPokemonState,
      pokemonDetail: { ...payload },
    }),
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const {
  loadUserPokemon: loadUserPokemonActionCreator,
  deleteUserPokemon: deleteUserPokemonActionCreator,
  addUserPokemon: addUserPokemonActionCreator,
  getPokemonDetail: getPokemonDetailActionCreator,
} = pokemonSlice.actions;
