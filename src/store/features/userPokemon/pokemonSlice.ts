import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserPokemon,
  UserPokemonList,
  UserPokemonListState,
  UserPokemonState,
} from "./types";

const initialPokemonList: UserPokemonList = [];

const initialState: UserPokemonState = {
  pokemonList: initialPokemonList,
  filter: "",
  totalPokemon: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadUserPokemon: (
      currentUserPokemonState,
      {
        payload: { pokemonList, totalPokemon },
      }: PayloadAction<UserPokemonListState>
    ): UserPokemonState => ({
      ...currentUserPokemonState,
      pokemonList: [...pokemonList],
      totalPokemon: totalPokemon,
    }),
    loadMoreUserPokemon: (
      currentUserPokemonState,
      { payload }: PayloadAction<UserPokemonList>
    ): UserPokemonState => ({
      ...currentUserPokemonState,
      pokemonList: [...currentUserPokemonState.pokemonList, ...payload],
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
    addFilter: (
      currentUserPokemonState,
      { payload }: PayloadAction<string>
    ): UserPokemonState => ({
      ...currentUserPokemonState,
      filter: payload,
    }),
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const {
  loadUserPokemon: loadUserPokemonActionCreator,
  deleteUserPokemon: deleteUserPokemonActionCreator,
  addUserPokemon: addUserPokemonActionCreator,
  addFilter: addFilterActionCreator,
  loadMoreUserPokemon: loadMoreUserPokemonActionCreator,
} = pokemonSlice.actions;
