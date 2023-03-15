import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPokemonList } from "./types";

const initialState: UserPokemonList = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    loadUserPokemon: (
      currentPokemonState,
      { payload }: PayloadAction<UserPokemonList>
    ) => [...payload],
    deleteUserPokemon: (
      currentPokemonState,
      { payload }: PayloadAction<string>
    ) =>
      currentPokemonState.filter((userPokemon) => userPokemon.id !== payload),
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const {
  loadUserPokemon: loadUserPokemonActionCreator,
  deleteUserPokemon: deleteUserPokemonActionCreator,
} = pokemonSlice.actions;
