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
  },
});

export const pokemonReducer = pokemonSlice.reducer;
export const { loadUserPokemon: loadUserPokemonActionCreator } =
  pokemonSlice.actions;
